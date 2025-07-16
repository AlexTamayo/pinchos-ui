import { useState, useEffect } from "react";

/**
 * Type for comparison operations
 * @typedef {'greaterThan' | 'lessThan' | 'equalTo'} ComparisonType
 */
type ComparisonType = "greaterThan" | "lessThan" | "equalTo";

/**
 * A hook that tracks viewport width and returns a boolean based on a comparison with a threshold
 * 
 * @param {number} threshold - The width value to compare against
 * @param {ComparisonType} [comparison='greaterThan'] - The type of comparison to perform
 * @returns {boolean} - True if the comparison condition is met, false otherwise
 * 
 * @example
 * // Check if viewport is wider than 768px
 * const isDesktop = useViewportWidth(768);
 * 
 * @example
 * // Check if viewport is narrower than 480px
 * const isMobile = useViewportWidth(480, 'lessThan');
 * 
 * @example
 * // Check if viewport is exactly 1024px
 * const isTablet = useViewportWidth(1024, 'equalTo');
 */
export function useViewportWidth(threshold: number, comparison: ComparisonType = "greaterThan") {
    const [condition, setCondition] = useState<boolean>(false);

    useEffect(() => {
        const checkWidth = () => {
            switch (comparison) {
                case "greaterThan":
                    setCondition(window.innerWidth > threshold);
                    break;
                case "lessThan":
                    setCondition(window.innerWidth < threshold);
                    break;
                case "equalTo":
                    setCondition(window.innerWidth == threshold);
                    break;
                default:
                    setCondition(window.innerWidth > threshold);
            }
        };

        // Check on mount
        checkWidth();

        // Check on resize
        window.addEventListener('resize', checkWidth);

        // cleanup
        return () => window.removeEventListener('resize', checkWidth);
    }, [threshold, comparison]);

    return condition;
}