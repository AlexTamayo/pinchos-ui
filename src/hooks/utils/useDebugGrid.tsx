import { useEffect } from "react";

/**
 * Debug Grid Options Interface
 * 
 * A comprehensive set of options for the useDebugGrid hook that provides
 * customizable grid overlay functionality for layout debugging.
 */
interface DebugGridOptions {
  /**
   * **`enabled`**
   * 
   * Toggles the debug grid overlay visibility.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  enabled?: boolean;

  /**
   * **`mode`**
   * 
   * Determines how the grid coordinates are calculated.
   * - 'viewport': Uses window dimensions and screen coordinates
   * - 'svg': Uses SVG viewBox dimensions and coordinates
   * 
   * **Syntax**: `viewport | svg`
   * 
   * **Initial value**: `viewport`
   */
  mode?: 'viewport' | 'svg';

  /**
   * **`majorSpacing`**
   * 
   * Distance between major grid lines in pixels or viewBox units.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `100`
   */
  majorSpacing?: number;

  /**
   * **`minorSpacing`**
   * 
   * Distance between minor grid lines in pixels or viewBox units.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `50`
   */
  minorSpacing?: number;

  /**
   * **`majorColor`**
   * 
   * Color of major grid lines.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `rgba(0, 0, 0, 0.7)`
   */
  majorColor?: string;

  /**
   * **`minorColor`**
   * 
   * Color of minor grid lines.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `rgba(0, 0, 0, 0.3)`
   */
  minorColor?: string;

  /**
   * **`majorLineWidth`**
   * 
   * Width of major grid lines in pixels.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `1`
   */
  majorLineWidth?: number;

  /**
   * **`minorLineWidth`**
   * 
   * Width of minor grid lines in pixels.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `0.5`
   */
  minorLineWidth?: number;

  /**
   * **`showCoordinates`**
   * 
   * Whether to display coordinate labels at major grid intersections.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `true`
   */
  showCoordinates?: boolean;

  /**
   * **`coordFontSize`**
   * 
   * Font size for coordinate labels in pixels.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `12`
   */
  coordFontSize?: number;

  /**
   * **`viewBoxWidth`**
   * 
   * Width of the SVG viewBox when in 'svg' mode.
   * Ignored in 'viewport' mode.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `960`
   */
  viewBoxWidth?: number;

  /**
   * **`viewBoxHeight`**
   * 
   * Height of the SVG viewBox when in 'svg' mode.
   * Ignored in 'viewport' mode.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `540`
   */
  viewBoxHeight?: number;
}

/**
 * useDebugGrid Hook
 * 
 * A React hook that creates a customizable grid overlay for debugging layouts.
 * Supports both viewport-based and SVG coordinate systems.
 * 
 * @example
 * // Basic usage
 * useDebugGrid({
 *   enabled: true,
 *   mode: 'viewport'
 * });
 * 
 * @example
 * // SVG coordinate system with custom spacing
 * useDebugGrid({
 *   enabled: true,
 *   mode: 'svg',
 *   viewBoxWidth: 1000,
 *   viewBoxHeight: 600,
 *   majorSpacing: 100,
 *   minorSpacing: 25
 * });
 * 
 * @example
 * // Custom styling
 * useDebugGrid({
 *   enabled: true,
 *   majorColor: 'rgba(255, 0, 0, 0.5)',
 *   minorColor: 'rgba(255, 0, 0, 0.2)',
 *   majorLineWidth: 2,
 *   coordFontSize: 14
 * });
 */
export const useDebugGrid = ({
  enabled = false,
  mode = 'viewport',
  majorSpacing = 100,
  minorSpacing = 50,
  majorColor = 'rgba(0, 0, 0, 0.7)',
  minorColor = 'rgba(0, 0, 0, 0.3)',
  majorLineWidth = 1,
  minorLineWidth = 0.5,
  showCoordinates = true,
  coordFontSize = 12,
  viewBoxWidth = 960,
  viewBoxHeight = 540,
}: DebugGridOptions = {}) => {
  useEffect(() => {
    if(!enabled) return;

    // Create grid overlay element
    const gridOverlay = document.createElement('div');
    gridOverlay.id = 'debug-grid-overlay';

    // Style the container
    Object.assign(gridOverlay.style, {
      position: mode === 'viewport' ? 'fixed' : 'absolute',
      top: '0',
      left: '0',
      width: mode === 'viewport' ? '100vw' : '100%',
      height: mode === 'viewport' ? '100vh' : '100%',
      pointerEvents: 'none',
      zIndex: '9999',
    });

    // Create canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      if (mode === 'viewport') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        // Set canvas size to match container
        const containerWidth = gridOverlay.clientWidth;
        const containerHeight = gridOverlay.clientHeight;
        
        canvas.width = containerWidth;
        canvas.height = containerHeight;
        
        // Reset any previous transformations
        if (ctx) {
          ctx.setTransform(1, 0, 0, 1, 0, 0);  // Reset to identity matrix
          
          // Calculate and apply scales independently
          const scaleX = containerWidth / viewBoxWidth;
          const scaleY = containerHeight / viewBoxHeight;
          ctx.transform(scaleX, 0, 0, scaleY, 0, 0);
        }
      }
    
      drawGrid();
    };

    const drawGridLines = (
      spacing: number,
      width: number,
      height: number,
      color: string,
      lineWidth: number
    ) => {
      if (!ctx) return;
      
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;

      // Vertical lines
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawGrid = () => {
      if (!ctx) return;

      // Clear the entire transformed canvas
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Get dimensions based on mode
      const width = mode === 'viewport' ? canvas.width : viewBoxWidth;
      const height = mode === 'viewport' ? canvas.height : viewBoxHeight;

      // Draw minor grid lines
      drawGridLines(minorSpacing, width, height, minorColor, minorLineWidth);

      // Draw major grid lines
      drawGridLines(majorSpacing, width, height, majorColor, majorLineWidth);

      // Add coordinates
      if (showCoordinates) {
        ctx.font = `${coordFontSize}px Arial`;
        ctx.fillStyle = majorColor;

        for (let x = 0; x < width; x += majorSpacing) {
          for (let y = 0; y < height; y += majorSpacing) {
            ctx.fillText(`(${x},${y})`, x + 4, y + coordFontSize + 4);
          }
        }
      }
    };

    // Add canvas to overlay
    gridOverlay.appendChild(canvas);
    document.body.appendChild(gridOverlay);

    // Handle window resize
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      document.body.removeChild(gridOverlay);
    };
  }, [
    enabled,
    majorSpacing,
    minorSpacing,
    majorColor,
    minorColor,
    majorLineWidth,
    minorLineWidth,
    showCoordinates,
    coordFontSize,
  ]);
  
}