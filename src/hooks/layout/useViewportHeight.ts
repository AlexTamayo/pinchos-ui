import { useState, useEffect } from "react";

/**
 * Type for comparison operations
 * @typedef {'greaterThan' | 'lessThan' | 'equalTo'} ComparisonType
 */
type ComparisonType = "greaterThan" | "lessThan" | "equalTo";

/**
 * A hook that tracks viewport height and returns a boolean based on a comparison with a threshold
 * 
 * @param {number} threshold - The height value to compare against
 * @param {ComparisonType} [comparison='greaterThan'] - The type of comparison to perform
 * @returns {boolean} - True if the comparison condition is met, false otherwise
 * 
 * @example
 * // Check if viewport is taller than 600px
 * const isTallScreen = useViewportHeight(600);
 * 
 * @example
 * // Check if viewport is shorter than 400px
 * const isShortScreen = useViewportHeight(400, 'lessThan');
 * 
 * @example
 * // Check if viewport is exactly 800px tall
 * const isSpecificHeight = useViewportHeight(800, 'equalTo');
 */
export function useViewportHeight(threshold: number, comparison: ComparisonType = "greaterThan") {
    const [condition, setCondition] = useState<boolean>(false);

    useEffect(() => {
        const checkHeight = () => {
            switch (comparison) {
                case "greaterThan":
                    setCondition(window.innerHeight > threshold);
                    break;
                case "lessThan":
                    setCondition(window.innerHeight < threshold);
                    break;
                case "equalTo":
                    setCondition(window.innerHeight == threshold);
                    break;
                default:
                    setCondition(window.innerHeight > threshold);
            }
        };

        // Check on mount
        checkHeight();

        // Check on resize
        window.addEventListener('resize', checkHeight);

        // cleanup
        return () => window.removeEventListener('resize', checkHeight);
    }, [threshold, comparison]);

    return condition;
}