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

import { useAlign } from '../../src/hooks/use-align';

describe('useAlign', () => {
  const createMockCanvas = () => {
    const mockCanvas = {
      getActiveObject: vi.fn(),
      fire: vi.fn(),
      requestRenderAll: vi.fn(),
    };
    return mockCanvas as unknown as Canvas;
  };

  const createMockObject = (props = {}) => {
    const mockObject = {
      set: vi.fn(),
      setCoords: vi.fn(),
      getBoundingRect: vi.fn(() => ({
        width: 100,
        height: 100,
        left: 0,
        top: 0,
        ...props,
      })),
      width: 100,
      height: 100,
      ...props,
    };
    return mockObject as unknown as FabricObject;
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('alignLeft', () => {
    it('應該在 canvas 爲 undefined 時不執行任何操作', () => {
      const { result } = renderHook(() => useAlign({ canvas: undefined }));
      act(() => {
        result.current.alignLeft();
      });
      // Since there is no canvas, no operation should occur
    });

    it('應該在選中對象少於 2 個時不執行任何操作', () => {
      const mockCanvas = createMockCanvas();
      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: [createMockObject()] }),
      );
      act(() => {
        result.current.alignLeft();
      });
      expect(mockCanvas.fire).not.toHaveBeenCalled();
    });

    it('應該正確執行左對齊', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject();
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.alignLeft();
      });

      mockObjects.forEach(obj => {
        expect(obj.set).toHaveBeenCalledWith({
          left: -mockActiveObject.width / 2,
        });
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('alignRight', () => {
    it('應該正確執行右對齊', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject();
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.alignRight();
      });

      mockObjects.forEach(obj => {
        expect(obj.set).toHaveBeenCalledWith({
          left: mockActiveObject.width / 2 - obj.getBoundingRect().width,
        });
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('alignCenter', () => {
    it('應該正確執行水平居中對齊', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject();
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.alignCenter();
      });

      mockObjects.forEach(obj => {
        expect(obj.set).toHaveBeenCalledWith({
          left: -obj.getBoundingRect().width / 2,
        });
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('alignTop', () => {
    it('應該正確執行頂部對齊', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject();
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.alignTop();
      });

      mockObjects.forEach(obj => {
        expect(obj.set).toHaveBeenCalledWith({
          top: -mockActiveObject.height / 2,
        });
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('alignMiddle', () => {
    it('應該正確執行垂直居中對齊', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject();
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.alignMiddle();
      });

      mockObjects.forEach(obj => {
        expect(obj.set).toHaveBeenCalledWith({
          top: -obj.getBoundingRect().height / 2,
        });
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('alignBottom', () => {
    it('應該正確執行底部對齊', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject();
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.alignBottom();
      });

      mockObjects.forEach(obj => {
        expect(obj.set).toHaveBeenCalledWith({
          top: mockActiveObject.height / 2 - obj.getBoundingRect().height,
        });
      });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('verticalAverage', () => {
    it('應該正確執行水平均分', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject({ width: 300 });
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.verticalAverage();
      });

      expect(mockObjects[0].set).toHaveBeenCalledWith({ left: -150 });
      expect(mockObjects[1].set).toHaveBeenCalledWith({ left: -50 });
      expect(mockObjects[2].set).toHaveBeenCalledWith({ left: 50 });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });

  describe('horizontalAverage', () => {
    it('應該正確執行垂直均分', () => {
      const mockCanvas = createMockCanvas();
      const mockActiveObject = createMockObject({ height: 300 });
      const mockObjects = [
        createMockObject(),
        createMockObject(),
        createMockObject(),
      ];
      (mockCanvas.getActiveObject as any).mockReturnValue(mockActiveObject);

      const { result } = renderHook(() =>
        useAlign({ canvas: mockCanvas, selectObjects: mockObjects }),
      );

      act(() => {
        result.current.horizontalAverage();
      });

      expect(mockObjects[0].set).toHaveBeenCalledWith({ top: -150 });
      expect(mockObjects[1].set).toHaveBeenCalledWith({ top: -50 });
      expect(mockObjects[2].set).toHaveBeenCalledWith({ top: 50 });
      expect(mockCanvas.fire).toHaveBeenCalledWith('object:moving');
      expect(mockCanvas.requestRenderAll).toHaveBeenCalled();
    });
  });
});
