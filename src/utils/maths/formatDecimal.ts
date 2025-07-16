/**
 * Number Utility Functions
 * 
 * A set of utility functions for handling number formatting and manipulation.
 */

/**
 * **`formatDecimal`**
 * 
 * Formats a number to a specified number of decimal places and returns it as a number.
 * Removes trailing zeros and unnecessary decimal points.
 * 
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 3)
 * @returns Formatted number
 * 
 * @example
 * // Basic usage
 * formatDecimal(3.14159, 2) // returns 3.14
 * 
 * @example
 * // With default decimals
 * formatDecimal(3.14159) // returns 3.142
 * 
 * @example
 * // Removes unnecessary decimals
 * formatDecimal(3.000, 3) // returns 3
 */
export const formatDecimal = (value: number, decimals: number = 3): number => {
    return parseFloat(value.toFixed(decimals));
};