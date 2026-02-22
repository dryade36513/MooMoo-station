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

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { reporter } from '@coze-arch/logger';

const mockSlardarInstance = vi.fn();
mockSlardarInstance.config = vi.fn();

// Analog loggers and reporters
vi.mock('@coze-arch/logger', () => ({
  logger: {
    info: vi.fn(),
  },
  reporter: {
    info: vi.fn(),
  },
  getSlardarInstance: vi.fn(() => mockSlardarInstance),
}));

describe('custom-perf-metric', () => {
  // Save the original global object
  const originalPerformance = global.performance;
  const originalDocument = global.document;
  const originalPerformanceObserver = global.PerformanceObserver;

  // simulation function
  const mockObserve = vi.fn();
  const mockDisconnect = vi.fn();
  const mockGetEntriesByName = vi.fn();
  const mockPerformanceNow = vi.fn().mockReturnValue(1000);

  // simulated route change entry
  const mockRouteChangeEntry = {
    startTime: 500,
    detail: {
      location: {
        pathname: '/test-path',
      },
    },
  };

  // Make sure the array has at method
  if (!Array.prototype.at) {
    // Add at method polyfill
    Object.defineProperty(Array.prototype, 'at', {
      value(index) {
        // Converts a negative index to an index starting at the end of the array
        return this[index < 0 ? this.length + index : index];
      },
      writable: true,
      configurable: true,
    });
  }

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();

    // Simulated performance object
    vi.stubGlobal('performance', {
      now: mockPerformanceNow,
      getEntriesByName: mockGetEntriesByName,
    });

    // Default simulated getEntriesByName return value
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        return [mockRouteChangeEntry];
      }
      if (name === 'first-contentful-paint') {
        return [
          {
            startTime: 800,
          },
        ];
      }
      return [];
    });

    // Mock document object
    global.document = {
      visibilityState: 'visible',
    } as any;

    // Analog PerformanceObserver
    global.PerformanceObserver = vi.fn().mockImplementation(callback => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
    })) as any;

    // Add the supportedEntryTypes property
    Object.defineProperty(global.PerformanceObserver, 'supportedEntryTypes', {
      value: ['paint'],
      configurable: true,
    });
  });

  afterEach(() => {
    // Restore original object
    global.performance = originalPerformance;
    global.document = originalDocument;
    global.PerformanceObserver = originalPerformanceObserver;
  });

  it('應該導出常量和函數', async () => {
    const { PerfMetricNames, REPORT_TTI_DEFAULT_SCENE, reportTti } =
      await vi.importActual<any>('../../src/utils/custom-perf-metric');

    expect(PerfMetricNames).toBeDefined();
    expect(PerfMetricNames.TTI).toBe('coze_custom_tti');
    expect(PerfMetricNames.TTI_HOT).toBe('coze_custom_tti_hot');
    expect(REPORT_TTI_DEFAULT_SCENE).toBe('init');
    expect(reportTti).toBeInstanceOf(Function);
  });

  it('當頁面可見且有 FCP 時應該調用 slardar 上報 TTI', async () => {
    const { reportTti, PerfMetricNames } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // execute
    reportTti({ key: 'value' });

    // verify
    expect(mockSlardarInstance).toHaveBeenCalledWith('sendCustomPerfMetric', {
      value: 1000,
      name: PerfMetricNames.TTI,
      type: 'perf',
      extra: {
        key: 'value',
        fcpTime: '800',
      },
    });
  });

  it('當頁面處於隱藏狀態時不應該上報 TTI', async () => {
    const { reportTti } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify document visibilityState
    Object.defineProperty(global.document, 'visibilityState', {
      value: 'hidden',
      configurable: true,
    });

    // execute
    reportTti();

    // verify
    expect(mockSlardarInstance).not.toHaveBeenCalled();
  });

  it('當同一路由和場景已經上報過時不應該重複上報', async () => {
    const { reportTti } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // first call
    reportTti({}, 'test-scene');

    // Clear simulation
    vi.clearAllMocks();

    // Second call to the same route and scenario
    reportTti({}, 'test-scene');

    // verify
    expect(mockSlardarInstance).not.toHaveBeenCalled();
  });

  it('當有多個路由變更時應該上報熱啓動 TTI', async () => {
    const { reportTti, PerfMetricNames } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to return multiple route changes
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        const entries = [
          {
            startTime: 300,
            detail: {
              location: {
                pathname: '/first-path',
              },
            },
          },
          {
            startTime: 500,
            detail: {
              location: {
                pathname: '/test-path2',
              },
            },
          },
        ];

        // Make sure the array has at method
        if (!entries.at) {
          entries.at = function (index) {
            return this[index < 0 ? this.length + index : index];
          };
        }

        return entries;
      }
      return [];
    });

    // execute
    reportTti({ key: 'value' });

    // verify
    expect(mockSlardarInstance).toHaveBeenCalledWith('sendCustomPerfMetric', {
      value: 500, // 1000 - 500 = 500
      name: PerfMetricNames.TTI_HOT,
      type: 'perf',
      extra: {
        key: 'value',
      },
    });
  });

  it('當 FCP 時間晚於當前時間時應該使用 FCP 時間作爲 TTI', async () => {
    const { reportTti, PerfMetricNames } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify performance.now return value
    mockPerformanceNow.mockReturnValue(700);

    // execute
    reportTti();

    // verify
    expect(mockSlardarInstance).toHaveBeenCalledWith('sendCustomPerfMetric', {
      value: 800, // Use FCP time
      name: PerfMetricNames.TTI,
      type: 'perf',
      extra: {
        fcpTime: '800',
      },
    });
  });

  it('當頁面可見且沒有 FCP 時應該設置 PerformanceObserver', async () => {
    const { reportTti } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to not return FCP
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        return [mockRouteChangeEntry];
      }
      // Returning an empty array indicates that there is no FCP.
      return [];
    });

    // execute
    reportTti();

    // verify
    expect(mockObserve).toHaveBeenCalledWith({ type: 'paint', buffered: true });
    expect(mockSlardarInstance).not.toHaveBeenCalled();
  });

  it('當 PerformanceObserver 觸發回調時應該上報 TTI', async () => {
    const { reportTti, PerfMetricNames } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to not return FCP
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        return [mockRouteChangeEntry];
      }
      return [];
    });

    // Prepare to simulate the PerformanceObserver callback
    let observerCallback: Function | undefined;
    global.PerformanceObserver = vi.fn().mockImplementation(callback => {
      observerCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
      };
    }) as any;

    // execute
    reportTti({ key: 'value' });

    // Simulate PerformanceObserver callbacks
    const mockList = {
      getEntriesByName: vi.fn().mockReturnValue([{ startTime: 900 }]),
    };

    // Make sure observerCallback has been assigned a value
    expect(observerCallback).toBeDefined();

    // execute callback
    if (observerCallback) {
      observerCallback(mockList);
    }

    // verify
    expect(mockSlardarInstance).toHaveBeenCalledWith('sendCustomPerfMetric', {
      value: 900,
      name: PerfMetricNames.TTI,
      type: 'perf',
      extra: {
        key: 'value',
        fcpTime: '900',
      },
    });
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('當 PerformanceObserver.observe 拋出錯誤時應該嘗試替代方法', async () => {
    const { reportTti } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to not return FCP
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        return [mockRouteChangeEntry];
      }
      return [];
    });

    // Simulate observe throw error
    mockObserve.mockImplementationOnce(() => {
      throw new Error('Failed to execute observe');
    });

    // execute
    reportTti();

    // verify
    expect(mockObserve).toHaveBeenCalledTimes(2);
    expect(mockObserve).toHaveBeenNthCalledWith(1, {
      type: 'paint',
      buffered: true,
    });
    expect(mockObserve).toHaveBeenNthCalledWith(2, { entryTypes: ['paint'] });
    expect(reporter.info).toHaveBeenCalledWith({
      message: 'Failed to execute observe',
      namespace: 'performance',
    });
  });

  it('當 PerformanceObserver 不支持 paint 類型時應該處理兼容性問題', async () => {
    const { reportTti } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to not return FCP
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        return [mockRouteChangeEntry];
      }
      return [];
    });

    // Simulate observe throw error
    mockObserve.mockImplementationOnce(() => {
      throw new Error('Failed to execute observe');
    });

    // Remove supportedEntryTypes
    Object.defineProperty(global.PerformanceObserver, 'supportedEntryTypes', {
      value: [],
      configurable: true,
    });

    // execute
    reportTti();

    // verify
    expect(mockObserve).toHaveBeenCalledTimes(1);
    expect(reporter.info).toHaveBeenCalledWith({
      message: 'Failed to execute observe',
      namespace: 'performance',
    });
  });

  it('當 PerformanceObserver 的第二種方法也失敗時應該處理錯誤', async () => {
    const { reportTti } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to not return FCP
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        return [mockRouteChangeEntry];
      }
      return [];
    });

    // Simulate observe throw error
    mockObserve
      .mockImplementationOnce(() => {
        throw new Error('First error');
      })
      .mockImplementationOnce(() => {
        throw new Error('Second error');
      });

    // execute
    reportTti();

    // verify
    expect(mockObserve).toHaveBeenCalledTimes(2);
    expect(reporter.info).toHaveBeenCalledTimes(2);
    expect(reporter.info).toHaveBeenNthCalledWith(1, {
      message: 'Second error',
      namespace: 'performance',
    });
    expect(reporter.info).toHaveBeenNthCalledWith(2, {
      message: 'First error',
      namespace: 'performance',
    });
  });

  it('當有多個路由變更但最後一個路由沒有startTime時應該使用默認值0', async () => {
    const { reportTti, PerfMetricNames } = await vi.importActual<any>(
      '../../src/utils/custom-perf-metric',
    );

    // Modify getEntriesByName to return multiple route changes, but the last one does not have a prepTime
    mockGetEntriesByName.mockImplementation(name => {
      if (name === 'route_change') {
        const entries = [
          {
            startTime: 300,
            detail: {
              location: {
                pathname: '/first-path',
              },
            },
          },
          {
            // No StartTime property
            detail: {
              location: {
                pathname: '/test-path2',
              },
            },
          },
        ];

        // Make sure the array has at method
        if (!entries.at) {
          entries.at = function (index) {
            return this[index < 0 ? this.length + index : index];
          };
        }

        return entries;
      }
      return [];
    });

    // execute
    reportTti({ key: 'value' });

    // verify
    expect(mockSlardarInstance).toHaveBeenCalledWith('sendCustomPerfMetric', {
      value: 700, // 1000 - 300 = 700 (with the first route's prepTime)
      name: PerfMetricNames.TTI_HOT,
      type: 'perf',
      extra: {
        key: 'value',
      },
    });
  });
});
