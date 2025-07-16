import { useRef } from 'react';

/**
 * useArrowKeyFocus
 *
 * Provides arrow key navigation for a list of focusable elements.
 * Returns:
 *   - optionRefs: ref array to assign to each element
 *   - handleArrowNavigation: keydown handler for arrow navigation
 *   - focusFirst: function to focus the first element (e.g. on open)
 */
export function useArrowKeyFocus<T extends HTMLElement = HTMLElement>() {
  const optionRefs = useRef<Array<T | null>>([]);

  const handleArrowNavigation = (e: React.KeyboardEvent<T>, idx: number) => {
    const total = optionRefs.current.length;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (idx + 1) % total;
      optionRefs.current[nextIdx]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (idx - 1 + total) % total;
      optionRefs.current[prevIdx]?.focus();
    }
  };

  const focusFirst = () => {
    optionRefs.current[0]?.focus();
  };

  return { optionRefs, handleArrowNavigation, focusFirst };
} 