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

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { type Canvas, type FabricObject } from 'fabric';
import { renderHook, act } from '@testing-library/react';

import { useCommonOperation } from '../../src/hooks/use-common-operation';

describe('useCommonOperation', () => {
  const createMockCanvas = () => {
    const mockCanvas = {
      getActiveObject: vi.fn(),
      getActiveObjects: vi.fn(),
      discardActiveObject: vi.fn(),
      requestRenderAll: vi.fn(),
      remove: vi.fn(),
      bringObjectToFront: vi.fn(),
      sendObjectToBack: vi.fn(),
      bringObjectForward: vi.fn(),
      sendObjectBackwards: vi.fn(),
      setWidth: vi.fn(),
      setHeight: vi.fn(),
      fire: vi.fn(),
    };
    return mockCanvas as unknown as Canvas;
  };

  const createMockObject = (props = {}) => {
    const mockObject = {
      isType: vi.fn(),
      fire: vi.fn(),
      set: vi.fn(),
      left: 100,
      top: 100,
      ...props,
    };
    return mockObject as unknown as FabricObject;
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('moveActiveObject', () => {
    it('應該在 canvas 爲 undefined 時不執行任何操作', () => {
      const { result } = renderHook(() =>
        useCommonOperation({ canvas: undefined }),
      );

      act(() => {
        result.current.moveActiveObject('left');
      });
    });

    it('應該正確移動單個對象', () => {
      const mockCanvas = createMockCanvas();
      const mockObject = createMockObject();
      (mockObject.isType as any).mockReturnValue(false);
      (mockCanvas.getActiveObject as any).mockReturnValue(mockObject);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.moveActiveObject('left', 10);
      });

      expect(mockObject.set).toHaveBeenCalledWith({ left: 90 });
      expect(mockObject.fire).toHaveBeenCalledWith('moving', {
        target: mockObject,
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });

    it('應該正確移動選中組', () => {
      const mockCanvas = createMockCanvas();
      const mockObject = createMockObject();
      (mockObject.isType as any).mockReturnValue(true);
      (mockCanvas.getActiveObject as any).mockReturnValue(mockObject);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.moveActiveObject('right', 10);
      });

      expect(mockObject.set).toHaveBeenCalledWith({ left: 110 });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving', {
        target: mockObject,
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('discardActiveObject', () => {
    it('應該正確取消選中對象', () => {
      const mockCanvas = createMockCanvas();
      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.discardActiveObject();
      });

      expect(mockCanvas.discardActiveObject).toHaveBeenCalled();
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('removeActiveObjects', () => {
    it('應該正確移除選中的對象', () => {
      const mockCanvas = createMockCanvas();
      const mockObjects = [createMockObject(), createMockObject()];
      (mockCanvas.getActiveObjects as any).mockReturnValue(mockObjects);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.removeActiveObjects();
      });

      mockObjects.forEach(obj => {
        expect(mockCanvas.remove).toHaveBeenCalledWith(obj);
      });
      expect(mockCanvas.discardActiveObject).toHaveBeenCalled();
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('moveTo', () => {
    it('應該正確將對象移動到最前', () => {
      const mockCanvas = createMockCanvas();
      const mockObjects = [createMockObject(), createMockObject()];
      (mockCanvas.getActiveObjects as any).mockReturnValue(mockObjects);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.moveTo('front');
      });

      mockObjects.forEach(obj => {
        expect(mockCanvas.bringObjectToFront).toHaveBeenCalledWith(obj);
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified-zIndex');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });

    it('應該正確將對象移動到最後', () => {
      const mockCanvas = createMockCanvas();
      const mockObjects = [createMockObject(), createMockObject()];
      (mockCanvas.getActiveObjects as any).mockReturnValue(mockObjects);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.moveTo('backend');
      });

      mockObjects.forEach(obj => {
        expect(mockCanvas.sendObjectToBack).toHaveBeenCalledWith(obj);
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified-zIndex');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });

    it('應該正確將對象向前移動一層', () => {
      const mockCanvas = createMockCanvas();
      const mockObjects = [createMockObject(), createMockObject()];
      (mockCanvas.getActiveObjects as any).mockReturnValue(mockObjects);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.moveTo('front-one');
      });

      mockObjects.forEach(obj => {
        expect(mockCanvas.bringObjectForward).toHaveBeenCalledWith(obj);
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified-zIndex');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });

    it('應該正確將對象向後移動一層', () => {
      const mockCanvas = createMockCanvas();
      const mockObjects = [createMockObject(), createMockObject()];
      (mockCanvas.getActiveObjects as any).mockReturnValue(mockObjects);

      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.moveTo('backend-one');
      });

      mockObjects.forEach(obj => {
        expect(mockCanvas.sendObjectBackwards).toHaveBeenCalledWith(obj);
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified-zIndex');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('resetWidthHeight', () => {
    it('應該正確重置畫布寬度', () => {
      const mockCanvas = createMockCanvas();
      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.resetWidthHeight({ width: 800 });
      });

      expect(mockCanvas.setWidth).toHaveBeenCalledWith(800);
      expect(mockCanvas.setHeight).not.toHaveBeenCalled();
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });

    it('應該正確重置畫布高度', () => {
      const mockCanvas = createMockCanvas();
      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.resetWidthHeight({ height: 600 });
      });

      expect(mockCanvas.setWidth).not.toHaveBeenCalled();
      expect(mockCanvas.setHeight).toHaveBeenCalledWith(600);
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });

    it('應該正確同時重置畫布寬度和高度', () => {
      const mockCanvas = createMockCanvas();
      const { result } = renderHook(() =>
        useCommonOperation({ canvas: mockCanvas }),
      );

      act(() => {
        result.current.resetWidthHeight({ width: 800, height: 600 });
      });

      expect(mockCanvas.setWidth).toHaveBeenCalledWith(800);
      expect(mockCanvas.setHeight).toHaveBeenCalledWith(600);
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:modified');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });
});
