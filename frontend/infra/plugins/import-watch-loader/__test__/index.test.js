import { describe, expect, it } from 'vitest';

import loader from '../index';
describe('test import-watch-loader', () => {
  it('code include tailwind utils', () => {
    const rawCode = `
      @tailwind utilities;
      body {
        width: 100%;
      }
    `;
    expect(() =>
      loader.call(
        {
          resourcePath: 'test1 resourcePath',
          callback: () => 0,
        },
        rawCode,
      ),
    ).toThrowError(
      'Error: test1 resourcePath:引入了多餘的 @tailwind utilities,請刪除。如有疑問請找wangfocheng',
    );
  });
  it('code not include tailwind utils', () => {
    const rawCode = `
        body {
          width: 100%;
        }
      `;
    const expectCode = rawCode;
    loader.call(
      {
        resourcePath: 'test2 resourcePath',
        callback: (error, code) => {
          expect(code).toBe(expectCode);
        },
      },
      rawCode,
    );
  });
});
