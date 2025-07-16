/**
 * Ensures that a value has appropriate CSS units.
 * 
 * - Numbers are converted to pixel values (e.g., 20 → "20px")
 * - Strings are returned as-is, assuming they already have units (e.g., "2rem", "50%")
 * - Undefined/null values return an empty string
 * 
 * @param value - The value to ensure has CSS units
 * @returns A string with appropriate CSS units
 * 
 * @example
 * ensureCssUnits(20)        // "20px"
 * ensureCssUnits("2rem")    // "2rem"
 * ensureCssUnits("50%")     // "50%"
 * ensureCssUnits(undefined) // ""
 * ensureCssUnits(null)      // ""
 */
export const ensureCssUnits = (value: string | number | undefined | null): string => {
  if (value === undefined || value === null) return '';
  if (typeof value === 'number') return `${value}px`;
  return String(value);
};

/**
 * Ensures that a CSS dimension value has appropriate units.
 * Alias for ensureCssUnits for more specific naming.
 * 
 * @param value - The dimension value to ensure has CSS units
 * @returns A string with appropriate CSS units
 */
export const ensureDimension = ensureCssUnits;

/**
 * Subtracts CSS values with units, supporting numbers and strings with units (e.g., 'px', 'rem', 'vh').
 * Throws an error if units are missing, unsupported, or don't match.
 * 
 * @param values - The CSS values to subtract from each other
 * @returns The result with appropriate units
 * 
 * @example
 * subtractCssUnits('100px', '20px')     // '80px'
 * subtractCssUnits(100, 20)             // 80
 * subtractCssUnits('100px', 20)         // '80px'
 * subtractCssUnits('2rem', '0.5rem')    // '1.5rem'
 */
export const subtractCssUnits = (...values: (string | number)[]): number | string  => {
  if (values.length === 0) {
    throw new Error('subtractCssUnits: At least one value is required');
  }

  // Start with the first value
  let result = values[0];

  // Check for percentage in first value
  if (typeof result === 'string' && result.trim().endsWith('%')) {
    throw new Error(`subtractCssUnits: Percentage values are not supported. Received: ${values.map(v => `'${v}'`).join(', ')}`);
  }

  // Process remaining values
  for (let i = 1; i < values.length; i++) {
    const current = values[i];

    // Check for percentage
    if (typeof current === 'string' && current.trim().endsWith('%')) {
      throw new Error(`subtractCssUnits: Percentage values are not supported. Received: ${values.map(v => `'${v}'`).join(', ')}`);
    }

    // Both numbers
    if (typeof result === 'number' && typeof current === 'number') {
      result = result - current;
      continue;
    }

    // Both strings
    if (typeof result === 'string' && typeof current === 'string') {
      const matchResult = result.match(/^([0-9.]+)([a-z%]*)$/);
      const matchCurrent = current.match(/^([0-9.]+)([a-z%]*)$/);
      
      if (matchResult && matchCurrent) {
        if (!matchResult[2] || !matchCurrent[2]) {
          throw new Error(`subtractCssUnits: Both string arguments must have a unit. Received: ${values.map(v => `'${v}'`).join(', ')}`);
        }
        if (matchResult[2] === matchCurrent[2]) {
          const value = parseFloat(matchResult[1]) - parseFloat(matchCurrent[1]);
          result = value + matchResult[2];
          continue;
        } else {
          throw new Error(`subtractCssUnits: Units do not match. Received: ${values.map(v => `'${v}'`).join(', ')}`);
        }
      }
    }

    // Number and string with px unit
    if (typeof result === 'number' && typeof current === 'string' && current.endsWith('px')) {
      const value = result - parseFloat(current);
      result = value + 'px';
      continue;
    }
    if (typeof result === 'string' && result.endsWith('px') && typeof current === 'number') {
      const value = parseFloat(result) - current;
      result = value + 'px';
      continue;
    }

    // Otherwise, not supported
    throw new Error(`subtractCssUnits: Unsupported types or units. Received: ${values.map(v => `'${v}'`).join(', ')}`);
  }

  return result;
}

/**
 * Adds CSS values with units, supporting numbers and strings with units (e.g., 'px', 'rem', 'vh').
 * Throws an error if units are missing, unsupported, or don't match.
 * 
 * @param values - The CSS values to add together
 * @returns The result with appropriate units
 * 
 * @example
 * addCssUnits('100px', '20px')     // '120px'
 * addCssUnits(100, 20)             // 120
 * addCssUnits('100px', 20)         // '120px'
 * addCssUnits('2rem', '0.5rem')    // '2.5rem'
 */
export const addCssUnits = (...values: (string | number)[]): number | string => {
  if (values.length === 0) {
    throw new Error('addCssUnits: At least one value is required');
  }

  // Start with the first value
  let result = values[0];

  // Check for percentage in first value
  if (typeof result === 'string' && result.trim().endsWith('%')) {
    throw new Error(`addCssUnits: Percentage values are not supported. Received: ${values.map(v => `'${v}'`).join(', ')}`);
  }

  // Process remaining values
  for (let i = 1; i < values.length; i++) {
    const current = values[i];

    // Check for percentage
    if (typeof current === 'string' && current.trim().endsWith('%')) {
      throw new Error(`addCssUnits: Percentage values are not supported. Received: ${values.map(v => `'${v}'`).join(', ')}`);
    }

    // Both numbers
    if (typeof result === 'number' && typeof current === 'number') {
      result = result + current;
      continue;
    }

    // Both strings
    if (typeof result === 'string' && typeof current === 'string') {
      const matchResult = result.match(/^([0-9.]+)([a-z%]*)$/);
      const matchCurrent = current.match(/^([0-9.]+)([a-z%]*)$/);
      
      if (matchResult && matchCurrent) {
        if (!matchResult[2] || !matchCurrent[2]) {
          throw new Error(`addCssUnits: Both string arguments must have a unit. Received: ${values.map(v => `'${v}'`).join(', ')}`);
        }
        if (matchResult[2] === matchCurrent[2]) {
          const value = parseFloat(matchResult[1]) + parseFloat(matchCurrent[1]);
          result = value + matchResult[2];
          continue;
        } else {
          throw new Error(`addCssUnits: Units do not match. Received: ${values.map(v => `'${v}'`).join(', ')}`);
        }
      }
    }

    // Number and string with px unit
    if (typeof result === 'number' && typeof current === 'string' && current.endsWith('px')) {
      const value = result + parseFloat(current);
      result = value + 'px';
      continue;
    }
    if (typeof result === 'string' && result.endsWith('px') && typeof current === 'number') {
      const value = parseFloat(result) + current;
      result = value + 'px';
      continue;
    }

    // Otherwise, not supported
    throw new Error(`addCssUnits: Unsupported types or units. Received: ${values.map(v => `'${v}'`).join(', ')}`);
  }

  return result;
}; 