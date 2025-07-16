/**
 * Style Utility Functions
 * 
 * Common utility functions used across styled-components for consistent
 * prop handling and value transformations.
 */

/**
 * Converts a value to a string with 'px' unit if it's a number
 * @param value - The value to convert
 * @returns The value with 'px' unit if number, or the original value
 */
export const getValueWithUnit = (value: string | number | undefined): string | undefined => {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
};

/**
 * Returns the value if defined, undefined otherwise
 * Used to handle optional styled-component props
 * @param value - The value to check
 * @returns The value if defined, undefined otherwise
 */
export const getStyledValue = <T>(value: T | undefined): T | undefined => {
  return value === undefined ? undefined : value;
};