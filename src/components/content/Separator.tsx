/**
 * Separator Component Props Interface
 * 
 * Props for the Separator component that provides
 * a flexible spacing element for layout purposes.
 */
interface SeparatorProps {
  /**
   * **`present`**
   * 
   * Controls whether the separator is rendered.
   * - When true: renders the separator
   * - When false: renders nothing (React.Fragment)
   * 
   * Useful for conditional spacing in responsive layouts.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `true`
   */
  present?: boolean;
  /**
   * **`horizontal`**
   * 
   * Determines the orientation of the separator.
   * - When true: creates a horizontal separator (width-based)
   * - When false: creates a vertical separator (height-based)
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  horizontal?: boolean;

  /**
   * **`dimension`**
   * 
   * Size of the separator in its primary dimension.
   * - For horizontal separators: controls the width
   * - For vertical separators: controls the height
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `40`
   */
  dimension?: string | number;

  /**
   * **`debugMode`**
   * 
   * When true, enables debug mode with background color and square aspect ratio
   * for easier visualization of the separator.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  debugMode?: boolean;

  /**
   * **`debugBgCol`**
   * 
   * Background color used when debug mode is enabled.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `'GreenYellow'`
   */
  debugBgCol?: string;
}

/**
 * Separator Component
 * 
 * A utility component that creates empty space between elements.
 * Can be oriented horizontally or vertically and sized as needed.
 * Includes a debug mode for easier visualization during development.
 * 
 * @example
 * // Basic vertical separator (40px tall)
 * <Separator />
 * 
 * @example
 * // Horizontal separator with custom width
 * <Separator horizontal dimension={100} />
 * 
 * @example
 * // Separator with debug visualization
 * <Separator debugMode debugBgCol="red" />
 */
export function Separator ({
  present    = true,
  horizontal = false,
  dimension  = 40,
  debugMode  = false,
  debugBgCol = 'GreenYellow'
}: SeparatorProps) {

  const orientationStyles = horizontal ? {
    width   : dimension,
    minWidth: dimension,
  } : {
    height   : dimension,
    minHeight: dimension,
  };

  const debugStyles = debugMode ? {
    backgroundColor: debugBgCol,
    aspectRatio: '1/1',
  } : {};

  return present ? (
    <div
      className="separator"
      style={{
        boxSizing: 'border-box',
        ...orientationStyles,
        ...debugStyles
      }}
    >
    </div>
  ) : (<></>);
}