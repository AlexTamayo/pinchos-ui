import { useEffect, useRef, useState, RefObject } from 'react';
import { debugLog } from '@/utils';

// const DEBUG = true;
const DEBUG = false;

interface ContentHeightOptions {
  enabled?: boolean;
  onHeightChange?: (height: number) => void;
  trigger?: any;
}

export function useContentHeight<T extends HTMLElement = HTMLElement>({
  enabled = true,
  onHeightChange,
  trigger
}: ContentHeightOptions = {}) {
  const ref = useRef<T>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [minHeight, setMinHeight] = useState<number>(0);
  const prevHeightRef = useRef<number>(0);

  // Reset state when trigger changes
  useEffect(() => {
    if (trigger !== undefined) {
      prevHeightRef.current = 0;
      setMinHeight(0);
      
      // Force recalculation after a short delay to ensure content has updated
      const timeoutId = setTimeout(() => {
        if (ref.current) {
          const height = measureTrueHeight(ref.current);
          if (height) {
            debugLog(DEBUG, 'useContentHeight - Trigger force update:', height);
            setContentHeight(height);
            setMinHeight(height);
            prevHeightRef.current = height;
            onHeightChange?.(height);
          }
        }
      }, 50); // Small delay to ensure content has updated

      return () => clearTimeout(timeoutId);
    }
  }, [trigger]);

  // Helper function to measure true height
  const measureTrueHeight = (element: HTMLElement) => {
    const originalStyle = {
      height: element.style.height,
      minHeight: element.style.minHeight,
    };

    element.style.height = 'auto';
    element.style.minHeight = '0';

    const height = element.getBoundingClientRect().height;

    element.style.height = originalStyle.height;
    element.style.minHeight = originalStyle.minHeight;

    return height;
  };

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const element = ref.current;
    let rafId: number;

    // Function to update heights
    const updateHeight = () => {
      const height = measureTrueHeight(element);
      if (!height) return;

      debugLog(DEBUG, 'useContentHeight - New height:', height);

      setContentHeight(height);
      
      // Only update minHeight if new height is larger
      if (height > prevHeightRef.current) {
        setMinHeight(height);
        prevHeightRef.current = height;
        onHeightChange?.(height);
      }
    };

    // Setup ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateHeight();
      });
    });

    // Setup MutationObserver to watch for DOM changes
    const mutationObserver = new MutationObserver((mutations) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateHeight();
      });
    });

    // Start observing
    resizeObserver.observe(element);
    mutationObserver.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });

    // Initial measurement
    updateHeight();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [enabled, onHeightChange]);

  return { ref, contentHeight, minHeight };
} 