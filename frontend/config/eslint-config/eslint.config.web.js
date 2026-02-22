const globals = require('globals');

/** @type {(import('eslint').Linter.Config[])} */
module.exports = [
  ...require('./eslint.config.base.js'),
  {
    plugins: {
      // TODO: Need to configure plugins according to different types? You need to read the source code to confirm whether it affects performance
      'react-hooks': require('eslint-plugin-react-hooks'),
      react: require('eslint-plugin-react'),
      risxss: require('eslint-plugin-risxss'),
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        JSX: true,
        React: true,
      },
    },
    settings: {
      // for eslint-plugin-react
      react: {
        pragma: 'React',
        version: '18.2',
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'risxss/catch-potential-xss-react': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@douyinfe/semi-ui', '@douyinfe/semi-ui/*'],
              message:
                '請勿直接使用@douyinfe/semi-ui, 請使用 @coze-arch/bot-semi',
            },
            {
              group: ['@douyinfe/semi-ui/lib/es/*'],
              message:
                '如果你的代碼爲 import { foo } from "@douyinfe/semi-ui/lib/es/bar", 可以嘗試替換爲 import { foo } from "@coze-arch/bot-semi/Bar"',
            },
            {
              group: ['@edenx/runtime/intl'],
              message:
                '請勿直接使用@edenx/runtime/intl, 請使用 @coze-arch/i18n',
            },
            {
              group: ['@edenx/runtime/router'],
              message:
                '請勿直接使用@edenx/runtime/router, 請使用 react-router-dom',
            },
            {
              group: ['@edenx/runtime/styled'],
              message:
                '請勿直接使用@edenx/runtime/styled, 請使用 styled-components',
            },
          ],
        },
      ],
    },
  },
];
