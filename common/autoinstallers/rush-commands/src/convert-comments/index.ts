/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#!/usr/bin/env node

import { createProgram, parseOptions, showHelp } from './cli/command';
import { loadConfig, validateConfig, printConfigInfo } from './cli/config';
import { scanSourceFiles } from './modules/file-scan';
import { detectChineseInFiles } from './modules/chinese-detection';
import { TranslationService } from './modules/translation';
import {
  createReplacements,
  replaceCommentsInFile,
} from './modules/file-replacement';
import {
  ReportCollector,
  ProgressDisplay,
  generateReport,
  saveReportToFile,
} from './modules/report';
import { FileScanConfig } from './types/index';

/**
 * main processing function
 */
async function processRepository(
  rootPath: string,
  extensions: string[],
  config: any,
  dryRun: boolean = false,
  verbose: boolean = false,
): Promise<void> {
  const reportCollector = new ReportCollector();

  try {
    console.log('🚀 開始處理代碼倉庫...');

    if (verbose) {
      printConfigInfo(config, true);
    }

    // 1. Scan source files
    console.log('\n📁 掃描源文件...');
    const scanConfig: FileScanConfig = {
      root: rootPath,
      extensions,
      ignorePatterns: config.git.ignorePatterns,
      includeUntracked: config.git.includeUntracked,
    };

    const filesResult = await scanSourceFiles(scanConfig);
    if (!filesResult.success) {
      throw new Error(`文件掃描失敗: ${filesResult.error}`);
    }

    const sourceFiles = filesResult.data;
    console.log(`✅ 找到 ${sourceFiles.length} 個源文件`);

    if (sourceFiles.length === 0) {
      console.log('⚠️  未找到任何源文件，請檢查根目錄和文件擴展名設置');
      return;
    }

    // 2. Detect Chinese annotations
    console.log('\n🔍 檢測中文註釋...');
    const filesWithComments = detectChineseInFiles(sourceFiles);

    const totalComments = filesWithComments.reduce(
      (sum, file) => sum + file.chineseComments.length,
      0,
    );

    console.log(
      `✅ 在 ${filesWithComments.length} 個文件中找到 ${totalComments} 條中文註釋`,
    );

    if (totalComments === 0) {
      console.log('✅ 未發現中文註釋，無需處理');
      return;
    }

    // 3. Initialize the translation service
    console.log('\n🤖 初始化翻譯服務...');
    const translationService = new TranslationService(config.translation);

    // 4. Processing documents
    console.log('\n🔄 開始翻譯處理...');
    const progressDisplay = new ProgressDisplay(filesWithComments.length);

    for (let i = 0; i < filesWithComments.length; i++) {
      const fileWithComments = filesWithComments[i];
      const { file, chineseComments } = fileWithComments;

      progressDisplay.update(i + 1, file.path);
      reportCollector.recordFileStart(file.path);

      try {
        // Translation annotations
        const translations = await translationService.batchTranslate(
          chineseComments,
          config.translation.concurrency,
        );

        if (verbose) {
          console.log(`\n📝 ${file.path}:`);
          translations.forEach((translation, index) => {
            console.log(
              `  ${index + 1}. "${translation.original}" → "${
                translation.translated
              }"`,
            );
          });
        }

        // If not in dry running mode, replace the file content
        if (!dryRun) {
          const replacements = createReplacements(
            file,
            chineseComments,
            translations,
          );
          const operation = { file: file.path, replacements };

          const result = await replaceCommentsInFile(file, operation);

          if (!result.success) {
            throw new Error(result.error || '文件替換失敗');
          }
        }

        reportCollector.recordFileComplete(file.path, chineseComments.length);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error(`\n❌ 處理文件失敗: ${file.path} - ${errorMessage}`);
        reportCollector.recordError(
          file.path,
          error instanceof Error ? error : new Error(errorMessage),
        );
      }
    }

    progressDisplay.complete();

    // 5. Generate reports
    console.log('\n📊 生成處理報告...');
    const report = reportCollector.generateReport();

    if (dryRun) {
      console.log('\n🔍 預覽模式 - 未實際修改文件');
    }

    // Show report
    const reportText = generateReport(report, 'console');
    console.log(reportText);

    // Save the report to a file (if output path is specified)
    if (config.outputFile) {
      await saveReportToFile(
        report,
        config.outputFile,
        config.processing.outputFormat,
      );
      console.log(`📄 報告已保存到: ${config.outputFile}`);
    }
  } catch (error) {
    console.error('\n💥 處理過程中發生錯誤:', error);
    process.exit(1);
  }
}

/**
 * main function
 */
async function main(): Promise<void> {
  try {
    const program = createProgram();

    // Parsing command line arguments
    program.parse();
    const options = parseOptions(program);

    // load configuration
    const config = await loadConfig(options);

    // verify configuration
    const validation = validateConfig(config);
    if (!validation.valid) {
      console.error('❌ 配置驗證失敗:');
      validation.errors.forEach(error => console.error(`  - ${error}`));
      showHelp();
      process.exit(1);
    }

    // Parse file extension
    const extensions = options.exts
      ? options.exts.split(',').map(ext => ext.trim())
      : config.processing.defaultExtensions;

    // Add output file configuration
    const fullConfig = {
      ...config,
      outputFile: options.output,
    };

    // execution processing
    await processRepository(
      options.root,
      extensions,
      fullConfig,
      options.dryRun || false,
      options.verbose || false,
    );
  } catch (error) {
    console.error('💥 程序執行失敗:', error);
    process.exit(1);
  }
}

// Handling uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
  console.error('未處理的Promise拒絕:', reason);
  process.exit(1);
});

process.on('uncaughtException', error => {
  console.error('未捕獲的異常:', error);
  process.exit(1);
});

// Run the main function
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
