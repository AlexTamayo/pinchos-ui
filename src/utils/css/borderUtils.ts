/**
 * Parses a CSS border shorthand string into its component parts
 * 
 * @param borderValue - CSS border shorthand (e.g., "1px solid red")
 * @returns Object containing width, style, and color components
 * 
 * @example
 * // Returns { width: '1px', style: 'solid', color: 'red' }
 * parseBorder('1px solid red');
 * 
 * @example
 * // Returns { width: '2px', style: 'dashed', color: '#000' }
 * parseBorder('2px dashed #000');
 */
export const parseBorder = (borderValue: string | undefined) => {
  if (!borderValue) return { width: '0px', style: 'none', color: 'transparent' };
  
  // Simple parsing of border shorthand
  const parts = borderValue.split(' ');
  
  // Default values
  let width = '0px';
  let style = 'none';
  let color = 'transparent';
  
  // Try to determine which part is which
  parts.forEach(part => {
    if (part.includes('px') || part.includes('em') || part.includes('rem') || /^\d+$/.test(part)) {
      width = part;
    } else if (['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'].includes(part)) {
      style = part;
    } else {
      color = part;
    }
  });
  
  return { width, style, color };
}; 