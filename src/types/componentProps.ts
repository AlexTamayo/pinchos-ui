import {
  Display,
  Hyphens,
  TextWrap,
  Position,
  Overflow,
  TextAlign,
  AlignSelf,
  BoxSizing,
  AlignItems,
  TextTransform,
  JustifyContent,
} from './cssTypes';
import { ReactNode } from 'react';


/**
 * Base Component Props Interface
 * 
 * Common props shared across UI components for consistent styling and behavior
 */
export interface BaseComponentProps {
  // Debug Options
  /**
   * **`debug`**
   * 
   * When true, enables debug mode with background color
   * for easier visualization of the container.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  debug?: boolean;
  
  /**
   * **`debugBGColor`**
   * 
   * Background color used when debug mode is enabled.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `black`
   */
  debugBGColor?: string;

  // Layout & Sizing
  /**
   * **`width`**
   * 
   * Width of the component.
   * - When string/number: uses the provided value
   * - When undefined: no width is set
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  width?: string | number;
  
  /**
   * **`height`**
   * 
   * Height of the component.
   * - When string/number: uses the provided value
   * - When undefined: no height is set
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  height?: string | number;
  
  /**
   * **`fullWidth`**
   * 
   * When true, sets width to 100%
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `undefined`
   */
  fullWidth?: boolean;
  
  /**
   * **`fullHeight`**
   * 
   * When true, sets height to 100%
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `undefined`
   */
  fullHeight?: boolean;
  
  /**
   * **`minWidth`**
   * 
   * Minimum width of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  minWidth?: string | number;
  
  /**
   * **`minHeight`**
   * 
   * Minimum height of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  minHeight?: string | number;
  
  /**
   * **`maxWidth`**
   * 
   * Maximum width of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  maxWidth?: string | number;
  
  /**
   * **`maxHeight`**
   * 
   * Maximum height of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  maxHeight?: string | number;
  
  /**
   * **`padding`**
   * 
   * Padding around the component (in px if number).
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `0`
   */
  padding?: string | number;
  
  /**
   * **`margin`**
   * 
   * Margin around the component (in px if number).
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `0`
   */
  margin?: string | number;

  /**
   * **`marginTop`**
   * 
   * Top margin of the component (in px if number).
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  marginTop?: string | number;

  /**
   * **`marginRight`**
   * 
   * Right margin of the component (in px if number).
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  marginRight?: string | number;

  /**
   * **`marginBottom`**
   * 
   * Bottom margin of the component (in px if number).
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  marginBottom?: string | number;

  /**
   * **`marginLeft`**
   * 
   * Left margin of the component (in px if number).
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  marginLeft?: string | number;

  // Positioning & Display
  /**
   * **`position`**
   * 
   * CSS position property for the component.
   * - 'static': Default positioning
   * - 'relative': Positioned relative to normal position
   * - 'absolute': Positioned relative to nearest positioned ancestor
   * - 'fixed': Positioned relative to viewport
   * - 'sticky': Positioned based on scroll position
   * 
   * **Type**: `Position`
   * 
   * **Initial value**: `static`
   */
  position?: Position;
  
  /**
   * **`display`**
   * 
   * CSS display property for the component.
   * - 'inline': Element generates inline-level boxes
   * - 'block': Element generates block-level boxes
   * - 'inline-block': Element generates a block container that flows with surrounding content
   * - 'flex': Element behaves like a block and lays out its content according to flexbox model
   * - 'grid': Element behaves like a block and lays out its content according to grid model
   * - 'none': Element is removed from the layout
   * 
   * **Type**: `Display`
   * 
   * **Initial value**: Varies by component
   */
  display?: Display;

  /**
   * **`scrollbarColor`**
   * 
   * CSS scrollbar-color property. Sets the color of the scrollbar thumb and track.
   * 
   * **Type**: `string`
   * 
   * **Format**: `<thumb-color> <track-color>`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarColor: "rebeccapurple green"
   * scrollbarColor: "auto"  // Use default colors
   * ```
   */
  scrollbarColor?: string;

  /**
   * **`scrollbarGutter`**
   * 
   * CSS scrollbar-gutter property. Controls the spacing reserved for the scrollbar.
   * 
   * **Type**: `'auto' | 'stable' | 'both-edges'`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `'auto'` - Default behavior, no reserved space when no scrollbar
   * - `'stable'` - Space always reserved for scrollbar
   * - `'both-edges'` - Space reserved on both edges
   */
  scrollbarGutter?: string;

  /**
   * **`scrollbarWidth`**
   * 
   * Width of the scrollbar. Can be specified in any valid CSS unit.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarWidth: "8px"
   * scrollbarWidth: "thin"
   * scrollbarWidth: 12
   * ```
   */
  scrollbarWidth?: string | number;

  /**
   * **`scrollbarHeight`**
   * 
   * Height of the scrollbar. Can be specified in any valid CSS unit.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarHeight: "8px"
   * scrollbarHeight: "thin"
   * scrollbarHeight: 12
   * ```
   */
  scrollbarHeight?: string | number;

  /**
   * **`scrollbarTrackBackground`**
   * 
   * Background color of the scrollbar track (the area the thumb moves along).
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarTrackBackground: "#f1f1f1"
   * scrollbarTrackBackground: "rgba(0, 0, 0, 0.1)"
   * ```
   */
  scrollbarTrackBackground?: string;
  
  /**
   * **`scrollbarThumbBackground`**
   * 
   * Background property of the scrollbar thumb (the draggable part).
   * Allows for more complex background definitions than scrollbarThumbBackgroundColor.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbBackground: "linear-gradient(45deg, #333, #666)"
   * scrollbarThumbBackground: "url('/thumb-pattern.png')"
   * scrollbarThumbBackground: "#888"
   * ```
   */
  scrollbarThumbBackground?: string;

  /**
   * **`scrollbarThumbBackgroundColor`**
   * 
   * Background color of the scrollbar thumb (the draggable part).
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbBackgroundColor: "#888"
   * scrollbarThumbBackgroundColor: "rgba(0, 0, 0, 0.5)"
   * ```
   */
  scrollbarThumbBackgroundColor?: string;

  /**
   * **`scrollbarThumbHoverBackground`**
   * 
   * Background color of the scrollbar thumb when hovered.
   * Allows for more complex background definitions than scrollbarThumbHoverBackgroundColor.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbHoverBackground: "linear-gradient(45deg, #333, #666)"
   * scrollbarThumbHoverBackground: "url('/thumb-pattern.png')"
   * scrollbarThumbHoverBackground: "#888"
   * ```
   */
  scrollbarThumbHoverBackground?: string;

  /**
   * **`scrollbarThumbHoverBackgroundColor`**
   * 
   * Background color of the scrollbar thumb when hovered.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbHoverBackgroundColor: "#555"
   * scrollbarThumbHoverBackgroundColor: "rgba(0, 0, 0, 0.7)"
   * ```
   */
  scrollbarThumbHoverBackgroundColor?: string;

  /**
   * **`scrollbarThumbActiveBackground`**
   * 
   * Background color of the scrollbar thumb when hovered.
   * Allows for more complex background definitions than scrollbarThumbActiveBackgroundColor.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbActiveBackground: "linear-gradient(45deg, #333, #666)"
   * scrollbarThumbActiveBackground: "url('/thumb-pattern.png')"
   * scrollbarThumbActiveBackground: "#888"
   * ```
   */
  scrollbarThumbActiveBackground?: string;

  /**
   * **`scrollbarThumbActiveBackgroundColor`**
   * 
   * Background color of the scrollbar thumb when clicked/active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbActiveBackgroundColor: "#333"
   * scrollbarThumbActiveBackgroundColor: "rgba(0, 0, 0, 0.9)"
   * ```
   */
  scrollbarThumbActiveBackgroundColor?: string;

  /**
   * **`scrollbarThumbBorder`**
   * 
   * Border property for the scrollbar thumb.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbBorder: "1px solid #333"
   * scrollbarThumbBorder: "2px dashed rgba(0, 0, 0, 0.5)"
   * ```
   */
  scrollbarThumbBorder?: string;

  /**
   * **`scrollbarThumbBorderRadius`**
   * 
   * Border radius of the scrollbar thumb.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * scrollbarThumbBorderRadius: 10
   * scrollbarThumbBorderRadius: "5px"
   * ```
   */
  scrollbarThumbBorderRadius?: string | number;

  /**
   * **`scrollbarThumbBackgroundClip`**
   * 
   * Background clip property for the scrollbar thumb.
   * 
   * **Type**: `'border-box' | 'padding-box' | 'content-box' | 'text'`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `'border-box'` - Background extends to outer edge of border
   * - `'padding-box'` - Background extends to outer edge of padding
   * - `'content-box'` - Background extends to edge of content box
   * - `'text'` - Background is clipped to foreground text
   */
  scrollbarThumbBackgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'text';

  /**
   * **`overflow`**
   * 
   * CSS overflow property for the component.
   * - 'visible': Content is not clipped and may overflow
   * - 'hidden': Content is clipped if necessary
   * - 'scroll': Scrollbars are always shown
   * - 'auto': Scrollbars appear only when content overflows
   * 
   * **Type**: `Overflow`
   * 
   * **Initial value**: `visible`
   */
  overflow?: Overflow;

  /**
   * **`overflowX`**
   * 
   * CSS overflow-x property for the component.
   * - 'visible': Content is not clipped and may overflow horizontally
   * - 'hidden': Content is clipped horizontally if necessary
   * - 'scroll': Horizontal scrollbar is always shown
   * - 'auto': Horizontal scrollbar appears only when content overflows
   * 
   * **Type**: `Overflow`
   * 
   * **Initial value**: `undefined`
   */
  overflowX?: Overflow;

  /**
   * **`overflowY`**
   * 
   * CSS overflow-y property for the component.
   * - 'visible': Content is not clipped and may overflow vertically
   * - 'hidden': Content is clipped vertically if necessary
   * - 'scroll': Vertical scrollbar is always shown
   * - 'auto': Vertical scrollbar appears only when content overflows
   * 
   * **Type**: `Overflow`
   * 
   * **Initial value**: `undefined`
   */
  overflowY?: Overflow;

  /**
   * **`boxSizing`**
   * 
   * CSS box-sizing property for the component.
   * - 'border-box': Width and height include padding and border
   * - 'content-box': Width and height only include content
   * 
   * **Type**: `BoxSizing`
   * 
   * **Initial value**: `border-box`
   */
  boxSizing?: BoxSizing;

  // Visual Style
  /**
   * **`background`**
   * 
   * CSS background shorthand property. Sets all background style properties at once.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - Can include color, image, position, size, repeat, attachment, origin, and clip
   * 
   * **Examples**:
   * ```tsx
   * background="red"
   * background="url('image.jpg')"
   * background="linear-gradient(to right, red, blue)"
   * background="url('image.jpg') center/cover no-repeat"
   * ```
   */
  background?: string;

  /**
   * **`backgroundColor`**
   * 
   * Background color of the component.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<color>`: Any valid CSS color value.
   *   - Keywords: `'black'`, `'white'`, `'red'`, etc.
   *   - Hex: `'#000000'`, `'#ff0000'`, etc.
   *   - RGB/RGBA: `'rgb(0, 0, 0)'`, `'rgba(0, 0, 0, 0.5)'`, etc.
   *   - HSL/HSLA: `'hsl(0, 0%, 0%)'`, `'hsla(0, 0%, 0%, 0.5)'`, etc.
   * 
   * **Examples**:
   * ```tsx
   * backgroundColor="black"
   * backgroundColor="#ff0000"
   * backgroundColor="rgba(0, 0, 0, 0.5)"
   * backgroundColor="hsl(0, 0%, 0%)"
   * ```
   */
  backgroundColor?: string;
  
  /**
   * **`backgroundImage`**
   * 
   * Background image of the component. Can be a URL, gradient, or other CSS image value.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<url>`: Path to an image file (e.g., `'url("image.png")'`).
   * - `<gradient>`: Any valid CSS gradient (e.g., `'linear-gradient(to right, red, blue)'`).
   * - `'none'`: No background image.
   * 
   * **Examples**:
   * ```tsx
   * backgroundImage="url('image.png')"
   * backgroundImage="linear-gradient(to right, red, blue)"
   * backgroundImage="none"
   * ```
   */
  backgroundImage?: string;

  /**
   * **`backgroundPosition`**
   * 
   * Position of the background image within the component.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<keyword>`: `'top'`, `'bottom'`, `'left'`, `'right'`, `'center'`.
   * - `<percentage>`: `'50% 50%'`, `'0% 100%'`, etc.
   * - `<length>`: `'10px 20px'`, `'0 0'`, etc.
   * - Combinations: `'top right'`, `'center 20px'`, etc.
   * 
   * **Examples**:
   * ```tsx
   * backgroundPosition="center"
   * backgroundPosition="50% 50%"
   * backgroundPosition="top right"
   * backgroundPosition="10px 20px"
   * ```
   */
  backgroundPosition?: string;

  /**
   * **`backgroundRepeat`**
   * 
   * How the background image repeats within the component.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `'repeat'`: Repeats in both directions.
   * - `'repeat-x'`: Repeats horizontally.
   * - `'repeat-y'`: Repeats vertically.
   * - `'no-repeat'`: Does not repeat.
   * - `'space'`: Repeats and spaces to fill the area.
   * - `'round'`: Repeats and scales to fill the area.
   * 
   * **Examples**:
   * ```tsx
   * backgroundRepeat="no-repeat"
   * backgroundRepeat="repeat-x"
   * backgroundRepeat="space"
   * backgroundRepeat="round"
   * ```
   */
  backgroundRepeat?: string;

  /**
   * **`backgroundSize`**
   * 
   * Size of the background image within the component.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<keyword>`: `'auto'`, `'cover'`, `'contain'`.
   * - `<length>`: `'100px'`, `'50%'`, etc.
   * - Combinations: `'100px 200px'`, `'50% auto'`, etc.
   * 
   * **Examples**:
   * ```tsx
   * backgroundSize="cover"
   * backgroundSize="contain"
   * backgroundSize="100px 200px"
   * backgroundSize="50% auto"
   * ```
   */
  backgroundSize?: string;
  
  /**
   * **`borderRadius`**
   * 
   * Border radius of the component, rounding its corners.
   * 
   * **Type**: `string | number`
   * 
   * **Values**:
   * - `<number>`: Radius in pixels (e.g., `10`).
   * - `<string>`: Radius in any valid CSS unit (e.g., `'10px'`, `'50%'`).
   * - Multiple values:
   *   - `'<top-left> <top-right> <bottom-right> <bottom-left>'`: Specifies each corner individually.
   *   - `'<horizontal> <vertical>'`: Specifies horizontal and vertical radii for elliptical corners.
   * 
   * **Examples**:
   * ```tsx
   * borderRadius="10px" // All corners
   * borderRadius="10px 20px" // Top-left & bottom-right: 10px, top-right & bottom-left: 20px
   * borderRadius="10px 20px 30px 40px" // Top-left: 10px, top-right: 20px, bottom-right: 30px, bottom-left: 40px
   * borderRadius="10px / 20px" // Horizontal radius: 10px, vertical radius: 20px (elliptical corners)
   * borderRadius={10} // All corners: 10px
   * ```
   */
  borderRadius?: string | number;
  
  /**
   * **`borderWidth`**
   * 
   * Width of the component's border.
   * 
   * **Type**: `string | number`
   * 
   * **Values**:
   * - `<number>`: Width in pixels (e.g., `2`).
   * - `<string>`: Width in any valid CSS unit (e.g., `'2px'`, `'0.5em'`).
   * - Multiple values:
   *   - `'<top> <right> <bottom> <left>'`: Specifies each side individually.
   *   - `'<vertical> <horizontal>'`: Specifies vertical and horizontal widths.
   * 
   * **Examples**:
   * ```tsx
   * borderWidth="2px" // All sides
   * borderWidth="2px 3px" // Top & bottom: 2px, right & left: 3px
   * borderWidth="2px 3px 4px 5px" // Top: 2px, right: 3px, bottom: 4px, left: 5px
   * borderWidth={2} // All sides: 2px
   * ```
   */
  borderWidth?: string | number;
  
  /**
   * **`borderStyle`**
   * 
   * Sets the style of an element's border.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `"none"` - No border
   * - `"hidden"` - Same as "none", except in border conflict resolution
   * - `"dotted"` - Dotted border
   * - `"dashed"` - Dashed border
   * - `"solid"` - Solid border
   * - `"double"` - Double border
   * - `"groove"` - 3D grooved border
   * - `"ridge"` - 3D ridged border
   * - `"inset"` - 3D inset border
   * - `"outset"` - 3D outset border
   * 
   * **Examples**:
   * ```css
   * borderStyle: "solid"
   * borderStyle: "dashed"
   * borderStyle: "double"
   * ```
   */
  borderStyle?: string;
  
  /**
   * **`borderColor`**
   * 
   * Color of the component's border.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<color>`: Any valid CSS color value.
   *   - Keywords: `'black'`, `'white'`, `'red'`, etc.
   *   - Hex: `'#000000'`, `'#ff0000'`, etc.
   *   - RGB/RGBA: `'rgb(0, 0, 0)'`, `'rgba(0, 0, 0, 0.5)'`, etc.
   *   - HSL/HSLA: `'hsl(0, 0%, 0%)'`, `'hsla(0, 0%, 0%, 0.5)'`, etc.
   * 
   * **Examples**:
   * ```tsx
   * borderColor="black"
   * borderColor="#ff0000"
   * borderColor="rgba(0, 0, 0, 0.5)"
   * borderColor="hsl(0, 0%, 0%)"
   * ```
   */
  borderColor?: string;
  
  /**
   * **`border`**
   * 
   * Border shorthand property (width, style, color).
   * Takes precedence over individual border properties.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `"none"` - No border
   * - `"unset"` - Removes any border
   * - `"initial"` - Sets to default value
   * - `"inherit"` - Inherits from parent
   * 
   * **Examples**:
   * ```css
   * border: "none"              // No border
   * border: "unset"             // Removes border
   * border: "initial"           // Default border
   * border: "inherit"           // Inherit from parent
   * border: "1px solid  black"  // width style color
   * border: "1px dashed black"  // width style color
   * border: "1px dotted black"  // width style color
   * border: "1px double black"  // width style color
   * border: "1px groove black"  // width style color
   * border: "1px ridge  black"  // width style color
   * border: "1px inset  black"  // width style color
   * border: "1px outset black"  // width style color
   * ```
   */
  border?: string;
  
  /**
   * **`borderTop`**
   * 
   * CSS border-top property for the component.
   * - Controls the width, style, and color of the top border.
   * - Accepts any valid CSS border value (e.g., "1px solid #000", "none").
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - "none" - No border
   * - "unset" - Removes any border
   * - "initial" - Sets to default value
   * - "inherit" - Inherits from parent
   * 
   * **Examples**:
   * ```css
   * borderTop: "none"              // No border
   * borderTop: "unset"             // Removes border
   * borderTop: "initial"           // Default border
   * borderTop: "inherit"           // Inherit from parent
   * borderTop: "1px solid  black"  // width style color
   * borderTop: "1px dashed black"  // width style color
   * borderTop: "1px dotted black"  // width style color
   * borderTop: "1px double black"  // width style color
   * borderTop: "1px groove black"  // width style color
   * borderTop: "1px ridge  black"  // width style color
   * borderTop: "1px inset  black"  // width style color
   * borderTop: "1px outset black"  // width style color
   * ```
   */
  borderTop?: string;

  /**
   * **`borderRight`**
   * 
   * CSS border-right property for the component.
   * - Controls the width, style, and color of the right border.
   * - Accepts any valid CSS border value (e.g., "1px solid #000", "none").
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - "none" - No border
   * - "unset" - Removes any border
   * - "initial" - Sets to default value
   * - "inherit" - Inherits from parent
   * 
   * **Examples**:
   * ```css
   * borderRight: "none"              // No border
   * borderRight: "unset"             // Removes border
   * borderRight: "initial"           // Default border
   * borderRight: "inherit"           // Inherit from parent
   * borderRight: "1px solid  black"  // width style color
   * borderRight: "1px dashed black"  // width style color
   * borderRight: "1px dotted black"  // width style color
   * borderRight: "1px double black"  // width style color
   * borderRight: "1px groove black"  // width style color
   * borderRight: "1px ridge  black"  // width style color
   * borderRight: "1px inset  black"  // width style color
   * borderRight: "1px outset black"  // width style color
   * ```
   */
  borderRight?: string;

  /**
   * **`borderBottom`**
   * 
   * CSS border-bottom property for the component.
   * - Controls the width, style, and color of the bottom border.
   * - Accepts any valid CSS border value (e.g., "1px solid #000", "none").
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - "none" - No border
   * - "unset" - Removes any border
   * - "initial" - Sets to default value
   * - "inherit" - Inherits from parent
   * 
   * **Examples**:
   * ```css
   * borderBottom: "none"              // No border
   * borderBottom: "unset"             // Removes border
   * borderBottom: "initial"           // Default border
   * borderBottom: "inherit"           // Inherit from parent
   * borderBottom: "1px solid  black"  // width style color
   * borderBottom: "1px dashed black"  // width style color
   * borderBottom: "1px dotted black"  // width style color
   * borderBottom: "1px double black"  // width style color
   * borderBottom: "1px groove black"  // width style color
   * borderBottom: "1px ridge  black"  // width style color
   * borderBottom: "1px inset  black"  // width style color
   * borderBottom: "1px outset black"  // width style color
   * ```
   */
  borderBottom?: string;

  /**
   * **`borderLeft`**
   * 
   * CSS border-left property for the component.
   * - Controls the width, style, and color of the left border.
   * - Accepts any valid CSS border value (e.g., "1px solid #000", "none").
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - "none" - No border
   * - "unset" - Removes any border
   * - "initial" - Sets to default value
   * - "inherit" - Inherits from parent
   * 
   * **Examples**:
   * ```css
   * borderLeft: "none"              // No border
   * borderLeft: "unset"             // Removes border
   * borderLeft: "initial"           // Default border
   * borderLeft: "inherit"           // Inherit from parent
   * borderLeft: "1px solid  black"  // width style color
   * borderLeft: "1px dashed black"  // width style color
   * borderLeft: "1px dotted black"  // width style color
   * borderLeft: "1px double black"  // width style color
   * borderLeft: "1px groove black"  // width style color
   * borderLeft: "1px ridge  black"  // width style color
   * borderLeft: "1px inset  black"  // width style color
   * borderLeft: "1px outset black"  // width style color
   * ```
   */
  borderLeft?: string;
  
  /**
   * **`boxShadow`**
   * 
   * Box shadow of the component.
   * 
   * **Format**: `<offset-x> <offset-y> <blur-radius> <color>`
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * // Basic shadow
   * boxShadow="2px 2px 4px rgba(0,0,0,0.5)"
   * 
   * // Multiple shadows
   * boxShadow="2px 2px 4px rgba(0,0,0,0.5), -2px -2px 4px rgba(255,255,255,0.5)"
   * 
   * // Colored shadow
   * boxShadow="2px 2px 4px red"
   * 
   * // Sharp shadow (no blur)
   * boxShadow="2px 2px 0 black"
   */
  boxShadow?: string;
  
  /**
   * **`opacity`**
   * 
   * Opacity of the component, controlling its transparency.
   * 
   * **Type**: `number`
   * 
   * **Values**:
   * - `0`: Fully transparent.
   * - `1`: Fully opaque.
   * - Any number between `0` and `1`: Semi-transparent.
   * 
   * **Examples**:
   * ```tsx
   * opacity={0.5}
   * opacity={1}
   * opacity={0}
   * ```
   */
  opacity?: number;

  /**
   * **`backdropFilter`**
   * 
   * Applies graphical effects to the area behind the component.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<filter>`: Any valid CSS filter function:
   *   - `'blur(<radius>)'`: Applies a Gaussian blur (e.g., `'blur(10px)'`).
   *   - `'brightness(<percentage>)'`: Adjusts brightness (e.g., `'brightness(50%)'`).
   *   - `'contrast(<percentage>)'`: Adjusts contrast (e.g., `'contrast(200%)'`).
   *   - `'grayscale(<percentage>)'`: Converts to grayscale (e.g., `'grayscale(100%)'`).
   *   - `'hue-rotate(<angle>)'`: Applies a hue rotation (e.g., `'hue-rotate(90deg)'`).
   *   - `'invert(<percentage>)'`: Inverts colors (e.g., `'invert(100%)'`).
   *   - `'opacity(<percentage>)'`: Adjusts opacity (e.g., `'opacity(50%)'`).
   *   - `'saturate(<percentage>)'`: Adjusts saturation (e.g., `'saturate(200%)'`).
   *   - `'sepia(<percentage>)'`: Applies a sepia effect (e.g., `'sepia(100%)'`).
   *   - `'drop-shadow(<offset-x> <offset-y> <blur-radius> <color>)'`: Adds a drop shadow (e.g., `'drop-shadow(2px 2px 4px black)'`).
   * - Multiple filters: Combine multiple filters (e.g., `'blur(10px) brightness(50%)'`).
   * 
   * **Examples**:
   * ```tsx
   * backdropFilter="blur(10px)"
   * backdropFilter="brightness(50%) contrast(200%)"
   * backdropFilter="grayscale(100%) opacity(50%)"
   * backdropFilter="drop-shadow(2px 2px 4px black)"
   * ```
   */
  backdropFilter?: string;

  /**
   * **`filter`**
   * 
   * Applies graphical effects to the component itself.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<filter>`: Any valid CSS filter function:
   *   - `'blur(<radius>)'`: Applies a Gaussian blur (e.g., `'blur(10px)'`).
   *   - `'brightness(<percentage>)'`: Adjusts brightness (e.g., `'brightness(50%)'`).
   *   - `'contrast(<percentage>)'`: Adjusts contrast (e.g., `'contrast(200%)'`).
   *   - `'grayscale(<percentage>)'`: Converts to grayscale (e.g., `'grayscale(100%)'`).
   *   - `'hue-rotate(<angle>)'`: Applies a hue rotation (e.g., `'hue-rotate(90deg)'`).
   *   - `'invert(<percentage>)'`: Inverts colors (e.g., `'invert(100%)'`).
   *   - `'opacity(<percentage>)'`: Adjusts opacity (e.g., `'opacity(50%)'`).
   *   - `'saturate(<percentage>)'`: Adjusts saturation (e.g., `'saturate(200%)'`).
   *   - `'sepia(<percentage>)'`: Applies a sepia effect (e.g., `'sepia(100%)'`).
   *   - `'drop-shadow(<offset-x> <offset-y> <blur-radius> <color>)'`: Adds a drop shadow (e.g., `'drop-shadow(2px 2px 4px black)'`).
   * - Multiple filters: Combine multiple filters (e.g., `'blur(10px) brightness(50%)'`).
   * 
   * **Examples**:
   * ```tsx
   * filter="blur(10px)"
   * filter="brightness(50%) contrast(200%)"
   * filter="grayscale(100%) opacity(50%)"
   * filter="drop-shadow(2px 2px 4px black)"
   * ```
   */
  filter?: string;

  // Typography
  /**
   * **`color`**
   * 
   * Text color of the component.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<color>`: Any valid CSS color value.
   *   - Keywords: `'black'`, `'white'`, `'red'`, etc.
   *   - Hex: `'#000000'`, `'#ff0000'`, etc.
   *   - RGB/RGBA: `'rgb(0, 0, 0)'`, `'rgba(0, 0, 0, 0.5)'`, etc.
   *   - HSL/HSLA: `'hsl(0, 0%, 0%)'`, `'hsla(0, 0%, 0%, 0.5)'`, etc.
   * 
   * **Examples**:
   * ```tsx
   * color="black"
   * color="#ff0000"
   * color="rgba(0, 0, 0, 0.5)"
   * color="hsl(0, 0%, 0%)"
   * ```
   */
  color?: string;
  
  /**
   * **`fontSize`**
   * 
   * Font size of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: Varies by component
   */
  fontSize?: string | number;
  
  /**
   * **`fontWeight`**
   * 
   * Font weight of the component.
   * 
   * **Type**: `number | string`
   * 
   * **Initial value**: Varies by component
   */
  fontWeight?: number | string;
  
  /**
   * **`fontFamily`**
   * 
   * Font family of the component.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: Varies by component
   */
  fontFamily?: string;
  
  /**
   * **`letterSpacing`**
   * 
   * Letter spacing of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `normal`
   */
  letterSpacing?: string | number;
  
  /**
   * **`lineHeight`**
   * 
   * Line height of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: Varies by component
   */
  lineHeight?: string | number;

  /**
   * **`textAlign`**
   * 
   * Text alignment within the component.
   * - 'left': Aligns text to the left
   * - 'center': Centers text horizontally
   * - 'right': Aligns text to the right
   * - 'justify': Stretches lines to equal width
   * 
   * **Type**: `TextAlign`
   * 
   * **Initial value**: Varies by component
   */
  textAlign?: TextAlign;

  
  /**
   * **`textWrap`**
   * 
   * Controls how text wrapping is handled.
   * - 'wrap': Text wraps normally at word boundaries
   * - 'nowrap': Text does not wrap
   * - 'balance': Balances text across lines (experimental)
   * - 'pretty': Prevents orphaned words (experimental)
   * - 'stable': Maintains consistent line breaks (experimental)
   * 
   * **Type**: `TextWrap`
   * 
   * **Initial value**: `undefined`
   */
  textWrap?: TextWrap;

  /**
   * **`textTransform`**
   * 
   * Controls the capitalization of text.
   * - 'none': No capitalization change
   * - 'capitalize': Transforms first character of each word to uppercase
   * - 'uppercase': Transforms all characters to uppercase
   * - 'lowercase': Transforms all characters to lowercase
   * - 'full-width': Transforms all characters to full-width form
   * - 'full-size-kana': Transforms all characters to full-size kana
   * 
   * **Type**: `TextTransform`
   * 
   * **Initial value**: `undefined`
   */
  textTransform?: TextTransform;

  /**
   * **`whiteSpace`**
   *
   * Controls how whitespace and line breaks are handled within the component.
   * - 'normal': Collapses whitespace, breaks lines as needed
   * - 'nowrap': Collapses whitespace, prevents line breaks
   * - 'pre': Preserves whitespace and line breaks
   * - 'pre-line': Collapses whitespace, preserves line breaks
   * - 'pre-wrap': Preserves whitespace, breaks lines as needed
   *
   * **Type**: `string`
   *
   * **Initial value**: `normal`
   *
   * **Examples**:
   * ```tsx
   * whiteSpace="normal"
   * whiteSpace="nowrap"
   * whiteSpace="pre"
   * whiteSpace="pre-line"
   * whiteSpace="pre-wrap"
   * ```
   */
  whiteSpace?: string;

  /**
   * **`hyphens`**
   * 
   * Controls how words are hyphenated when text wraps across lines.
   * - 'none': No hyphenation
   * - 'manual': Only hyphenate at manually specified points (using &shy; or &#173;)
   * - 'auto': Browser automatically hyphenates words when needed
   * 
   * **Type**: `Hyphens`
   * 
   * **Initial value**: `undefined`
   */
  hyphens?: Hyphens;

  /**
   * **`userSelect`**
   * 
   * Controls whether and how text can be selected.
   * - 'none': Text cannot be selected
   * - 'text': Text can be selected
   * - 'all': All text is selected when clicked
   * - 'auto': Browser determines selection behavior
   * 
   * **Type**: `'none' | 'text' | 'all' | 'auto'`
   * 
   * **Initial value**: `undefined`
   */
  userSelect?: 'none' | 'text' | 'all' | 'auto';

    /**
   * **`selectionTextColor`**
   * 
   * Text color of selected text within the input/textarea.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Example**:
   * ```css
   * selectionTextColor: "#ffffff"
   * ```
   */
    selectionTextColor?: string;

    /**
     * **`selectionBackgroundColor`**
     * 
     * Background color of selected text within the input/textarea.
     * 
     * **Type**: `string`
     * 
     * **Initial value**: `undefined`
     * 
     * **Example**:
     * ```css
     * selectionBackgroundColor: "rgba(255, 0, 0, 0.5)"
     * ```
     */
    selectionBackgroundColor?: string;

  /**
   * **`textStroke`**
   * 
   * Controls the outline/stroke effect of text.
   * Combines width and color properties in a single value.
   * - 'none': No stroke effect
   * 
   * **Format**: `<width> <color>`
   * 
   * Width can be:
   * - Pixels: '1px', '0.5px'
   * - Em units: '0.1em', '0.05em'
   * - Rem units: '0.1rem', '0.05rem'
   * 
   * Color can be:
   * - Keywords: 'black', 'red'
   * - Hex: '#000000', '#ff0000'
   * - RGB/RGBA: 'rgb(0,0,0)', 'rgba(0,0,0,0.5)'
   * - HSL/HSLA: 'hsl(0,0%,0%)', 'hsla(0,0%,0%,0.5)'
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * textStroke="1px black"
   * textStroke="0.5px #ff0000"
   * textStroke="0.1em rgba(0,0,0,0.5)"
   * ```
   */
  textStroke?: string;

  /**
   * **`textShadow`**
   * 
   * CSS text-shadow property. Adds shadow effects to text.
   * 
   * **Format**: `<offset-x> <offset-y> <blur-radius> <color>`
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * // Basic shadow
   * textShadow="2px 2px 4px rgba(0,0,0,0.5)"
   * 
   * // Multiple shadows
   * textShadow="2px 2px 4px rgba(0,0,0,0.5), -2px -2px 4px rgba(255,255,255,0.5)"
   * 
   * // Colored shadow
   * textShadow="2px 2px 4px red"
   * 
   * // Sharp shadow (no blur)
   * textShadow="2px 2px 0 black"
   * ```
   */
  textShadow?: string;

  // Transitions & Animations
  /**
   * **`transition`**
   * 
   * CSS transition property for the component.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: Varies by component
   */
  transition?: string;
  
  /**
   * **`transform`**
   * 
   * CSS transform property for the component.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  transform?: string;
  
  /**
   * **`animation`**
   * 
   * CSS animation property for the component.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  animation?: string;

  /**
   * **`isThemeTransition`**
   * 
   * Whether to apply theme transition styles.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  isThemeTransition?: boolean;

  // Hover States
  /**
   * **`hoverBackgroundColor`**
   * 
   * Background color on hover.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: Varies by component
   */
  hoverBackgroundColor?: string;
  
  /**
   * **`hoverColor`**
   * 
   * Text color on hover.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  hoverColor?: string;
  
  /**
   * **`hoverBackdropFilter`**
   * 
   * Backdrop filter effect on hover. Applies graphical effects to the area behind the element when hovered.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - `<filter>`: Any valid CSS filter function:
   *   - `'blur(<radius>)'`: Applies a Gaussian blur (e.g., `'blur(10px)'`).
   *   - `'brightness(<percentage>)'`: Adjusts brightness (e.g., `'brightness(50%)'`).
   *   - `'contrast(<percentage>)'`: Adjusts contrast (e.g., `'contrast(200%)'`).
   *   - `'grayscale(<percentage>)'`: Converts to grayscale (e.g., `'grayscale(100%)'`).
   *   - `'hue-rotate(<angle>)'`: Applies a hue rotation (e.g., `'hue-rotate(90deg)'`).
   *   - `'invert(<percentage>)'`: Inverts colors (e.g., `'invert(100%)'`).
   *   - `'opacity(<percentage>)'`: Adjusts opacity (e.g., `'opacity(50%)'`).
   *   - `'saturate(<percentage>)'`: Adjusts saturation (e.g., `'saturate(200%)'`).
   *   - `'sepia(<percentage>)'`: Applies a sepia effect (e.g., `'sepia(100%)'`).
   *   - `'drop-shadow(<offset-x> <offset-y> <blur-radius> <color>)'`: Adds a drop shadow.
   * - Multiple filters: Combine multiple filters (e.g., `'blur(10px) brightness(50%)'`).
   * 
   * **Examples**:
   * ```tsx
   * hoverBackdropFilter="blur(10px)"
   * hoverBackdropFilter="brightness(50%) contrast(200%)"
   * hoverBackdropFilter="grayscale(100%) opacity(50%)"
   * hoverBackdropFilter="drop-shadow(2px 2px 4px black)"
   * ```
   */
  hoverBackdropFilter?: string;
  
  /**
   * **`hoverBorder`**
   * 
   * Border shorthand property for hover state.
   * Takes precedence over individual hover border properties.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  hoverBorder?: string;

  /**
   * **`hoverBorderColor`**
   * 
   * Border color on hover.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  hoverBorderColor?: string;
  
  /**
   * **`hoverBorderWidth`**
   * 
   * Border width on hover.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  hoverBorderWidth?: string | number;
  
  /**
   * **`hoverBorderStyle`**
   * 
   * Border style on hover.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  hoverBorderStyle?: string;
  
  /**
   * **`hoverBorderRadius`**
   * 
   * Border radius on hover.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  hoverBorderRadius?: string | number;
  
  /**
   * **`hoverTransform`**
   * 
   * Transform on hover.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  hoverTransform?: string;

  /**
   * **`hoverBoxShadow`**
   * 
   * Box shadow on hover.
   * 
   * **Format**: `<offset-x> <offset-y> <blur-radius> <color>`
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * // Basic shadow
   * hoverBoxShadow="2px 2px 4px rgba(0,0,0,0.5)"
   * 
   * // Multiple shadows
   * hoverBoxShadow="2px 2px 4px rgba(0,0,0,0.5), -2px -2px 4px rgba(255,255,255,0.5)"
   * 
   * // Colored shadow
   * hoverBoxShadow="2px 2px 4px red"
   * 
   * // Sharp shadow (no blur)
   * hoverBoxShadow="2px 2px 0 black"
   * ```
   */
  hoverBoxShadow?: string;


  // Focus State Props
  /**
   * **`focusOutline`**
   * 
   * Outline style on focus.
   * 
   * **Type**: `'none' | 'auto' | string`
   * 
   * **Format**: `<size> <border-style> <color>`
   * 
   * **Initial value**: `'none'`
   * 
   * **Values**:
   * - `'none'` - No outline
   * - `'auto'` - Default browser outline
   * 
   * **Border Styles**:
   * - `'solid'` - Solid line
   * - `'dashed'` - Dashed line
   * - `'dotted'` - Dotted line
   * - `'double'` - Double line
   * - `'groove'` - 3D grooved effect
   * - `'ridge'` - 3D ridged effect
   * - `'inset'` - 3D inset effect
   * - `'outset'` - 3D outset effect
   * - `'hidden'` - Same as none
   * 
   * **Example**:
   * ```css
   * focusOutline: "2px solid blue"
   * ```
   */
  focusOutline?: string;

  /**
   * **`focusOutlineOffset`**
   * 
   * Space between the element and its outline on focus.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**: A CSS length value (px, em, rem, etc.)
   * 
   * **Example**:
   * ```css
   * focusOutlineOffset: "2px"
   * ```
   */
  focusOutlineOffset?: string | number;

  /**
   * **`focusBorderColor`**
   * 
   * Border color on focus.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  focusBorderColor?: string;

  /**
   * **`focusBoxShadow`**
   * 
   * Box shadow on focus.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  focusBoxShadow?: string;

  // Active States
  /**
   * **`activeBackgroundColor`**
   * 
   * Background color when active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeBackgroundColor?: string;
  
  /**
   * **`activeColor`**
   * 
   * Text color when active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeColor?: string;

  /**
   * **`activeBorder`**
   * 
   * Border shorthand property for active state.
   * Takes precedence over individual hover border properties.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeBorder?: string;
  
  /**
   * **`activeBorderColor`**
   * 
   * Border color when active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeBorderColor?: string;
  
  /**
   * **`activeBorderWidth`**
   * 
   * Border width when active.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  activeBorderWidth?: string | number;
  
  /**
   * **`activeBorderStyle`**
   * 
   * Border style when active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeBorderStyle?: string;
  
  /**
   * **`activeBorderRadius`**
   * 
   * Border radius when active.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  activeBorderRadius?: string | number;
  
  /**
   * **`activeTransform`**
   * 
   * Transform when active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeTransform?: string;
  
  /**
   * **`activeBoxShadow`**
   * 
   * Box shadow when active.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  activeBoxShadow?: string;

  // Alignment (when display is flex)
  /**
   * **`flex`**
   * 
   * CSS flex property for flex items.
   * - Controls how a flex item grows, shrinks, and its base size within a flex container.
   * - Accepts any valid CSS flex value.
   * 
   * **Value format:**  
   * - `"none"`: Equivalent to `0 0 auto` (item is inflexible, sized based on content)
   * - `"auto"`: Equivalent to `1 1 auto` (item grows and shrinks as needed, based on content)
   * - `"initial"`: Equivalent to `0 1 auto` (item shrinks but does not grow)
   * - `"1"`: Equivalent to `1 1 0%` (item grows and shrinks, no base size)
   * - `"2 1 0%"`: `flex-grow flex-shrink flex-basis` (custom growth, shrink, and base size)
   * 
   * **Type**: `string`
   * 
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * flex="1"
   * flex="2 1 0%"
   * flex="none"
   * flex="auto"
   * ```
   */
  flex?: string;

  /**
   * **`flexDirection`**
   * 
   * CSS flex-direction property. Defines how flex items are placed in the flex container.
   * 
   * **Type**: `'row' | 'column' | 'row-reverse' | 'column-reverse'`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * flexflexDirection="row"
   * flexflexDirection="column"
   * flexflexDirection="row-reverse"
   * ```
   */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
   * **`justifyContent`**
   * 
   * Justify content property when display is flex.
   * - 'flex-start': Items are packed toward start of flex container
   * - 'flex-end': Items are packed toward end of flex container
   * - 'center': Items are centered in flex container
   * - 'space-between': Items are evenly distributed with first item at start and last at end
   * - 'space-around': Items are evenly distributed with equal space around them
   * - 'space-evenly': Items are distributed so that spacing between any two items is equal
   * - 'start': Items are packed toward the start of the writing direction
   * - 'end': Items are packed toward the end of the writing direction
   * - 'left': Items are packed toward the left edge of the container
   * - 'right': Items are packed toward the right edge of the container
   * - 'stretch': Items are stretched to fill the container
   * - 'safe center': Items are centered with safe alignment
   * - 'unsafe center': Items are centered with unsafe alignment
   * 
   * **Type**: `JustifyContent`
   * 
   * **Initial value**: `center`
   */
  justifyContent?: JustifyContent;
  
  /**
   * **`alignItems`**
   * 
   * Align items property when display is flex.
   * - 'flex-start': Items are aligned to start of cross axis
   * - 'flex-end': Items are aligned to end of cross axis
   * - 'center': Items are centered on cross axis
   * - 'stretch': Items are stretched to fill container
   * - 'baseline': Items are aligned by their baselines
   * - 'normal': Items are aligned according to their normal alignment
   * - 'start': Items are aligned to the start of the writing direction
   * - 'end': Items are aligned to the end of the writing direction
   * - 'self-start': Items are aligned to the start of their own writing direction
   * - 'self-end': Items are aligned to the end of their own writing direction
   * - 'safe center': Items are centered with safe alignment
   * - 'unsafe center': Items are centered with unsafe alignment
   * 
   * **Type**: `AlignItems`
   * 
   * **Initial value**: `center`
   */
  alignItems?: AlignItems;

  /**
   * **`alignSelf`**
   * 
   * CSS align-self property for the component.
   * - 'auto': Inherits parent's align-items value
   * - 'flex-start': Aligns to start of cross axis
   * - 'flex-end': Aligns to end of cross axis
   * - 'center': Centers on cross axis
   * - 'stretch': Stretches to fill container
   * - 'baseline': Aligns by baseline
   * - 'normal': Uses normal alignment
   * - 'start': Aligns to start of writing direction
   * - 'end': Aligns to end of writing direction
   * - 'self-start': Aligns to start of own writing direction
   * - 'self-end': Aligns to end of own writing direction
   * - 'safe center': Centers with safe alignment
   * - 'unsafe center': Centers with unsafe alignment
   * 
   * **Type**: `AlignSelf`
   * 
   * **Initial value**: `undefined`
   */
  alignSelf?: AlignSelf;

  /**
   * **`gap`**
   * 
   * CSS gap property. Defines the size of the gap between flex/grid items.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * gap="1rem"
   * gap={16}
   * gap="1rem 2rem"  // row-gap column-gap
   * ```
   */
  gap?: string | number;

  /**
   * **`aspectRatio`**
   * 
   * CSS aspect-ratio property. Defines the preferred aspect ratio of the element.
   * - When true: sets aspect ratio to 1/1 (square)
   * - When string: uses the provided value (e.g., '16/9')
   * - When undefined: no aspect ratio is set
   * 
   * **Type**: `string | boolean`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * aspectRatio={true}  // 1:1
   * aspectRatio="16/9"
   * aspectRatio="4/3"
   * ```
   */
  aspectRatio?: string | boolean;

  // Custom Styles
  /**
   * **`className`**
   * 
   * Optional CSS class name for additional styling.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  className?: string;
  
  /**
   * **`top`**
   * 
   * Top position of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  top?: string | number;

  /**
   * **`right`**
   * 
   * Right position of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  right?: string | number;

  /**
   * **`left`**
   * 
   * Left position of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  left?: string | number;

  /**
   * **`bottom`**
   * 
   * Bottom position of the component.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  bottom?: string | number;

  /**
   * **`zIndex`**
   * 
   * Z-index of the component, controlling its stacking order.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `undefined`
   */
  zIndex?: number;

  /**
   * **`cursor`**
   * 
   * CSS cursor property for the component.
   * - 'auto': Browser determines the cursor to display
   * - 'default': Default cursor
   * - 'none': No cursor is rendered
   * - 'context-menu': Context menu is available
   * - 'help': Help is available
   * - 'pointer': Link pointer
   * - 'progress': Program is busy in the background
   * - 'wait': Program is busy
   * - 'cell': Table cell or set of cells
   * - 'crosshair': Crosshair cursor
   * - 'text': Text can be selected
   * - 'vertical-text': Vertical text can be selected
   * - 'alias': Shortcut will be created
   * - 'copy': Something is to be copied
   * - 'move': Something is to be moved
   * - 'no-drop': Item cannot be dropped here
   * - 'not-allowed': Requested action will not be executed
   * - 'grab': Something can be grabbed
   * - 'grabbing': Something is being grabbed
   * - 'all-scroll': Something can be scrolled in any direction
   * - 'col-resize': Item/column can be resized horizontally
   * - 'row-resize': Item/row can be resized vertically
   * - 'n-resize': Edge can be moved up
   * - 'e-resize': Edge can be moved right
   * - 's-resize': Edge can be moved down
   * - 'w-resize': Edge can be moved left
   * - 'ne-resize': Edge can be moved up and right
   * - 'nw-resize': Edge can be moved up and left
   * - 'se-resize': Edge can be moved down and right
   * - 'sw-resize': Edge can be moved down and left
   * - 'ew-resize': Edge can be moved left and right
   * - 'ns-resize': Edge can be moved up and down
   * - 'nesw-resize': Edge can be moved up-right and down-left
   * - 'nwse-resize': Edge can be moved up-left and down-right
   * - 'zoom-in': Something can be zoomed in
   * - 'zoom-out': Something can be zoomed out
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  cursor?: string;

  /**
   * **`pointerEvents`**
   *
   * CSS pointer-events property for the component.
   * - Controls under what circumstances (if any) a particular graphic element can become the target of mouse events.
   * - Accepts any valid CSS pointer-events value.
   *
   * **Type**: `string`
   *
   * **Initial value**: `auto`
   *
   * **Examples**:
   * ```tsx
   * pointerEvents="auto"
   * pointerEvents="none"
   * pointerEvents="all"
   * pointerEvents="visiblePainted"
   * pointerEvents="visibleFill"
   * pointerEvents="visibleStroke"
   * pointerEvents="visible"
   * pointerEvents="painted"
   * pointerEvents="fill"
   * pointerEvents="stroke"
   * pointerEvents="inherit"
   * ```
   */
  pointerEvents?: string;

  /**
   * **`clipPath`**
   * 
   * CSS clip-path property. Creates a clipping region that sets what part of an element should be shown.
   * 
   * **Values**:
   * - 'none': No clipping
   * - 'inset()': Rectangular clipping region
   * - 'circle()': Circular clipping region
   * - 'ellipse()': Elliptical clipping region
   * - 'polygon()': Complex shape clipping region
   * - 'path()': SVG path clipping region
   * - '<url>': Reference to SVG clipPath element
   * 
   * **Examples**:
   * ```tsx
   * // Basic shapes
   * clipPath="circle(50% at center)"
   * clipPath="inset(10px 20px 30px 40px)"
   * clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
   * 
   * // With round corners
   * clipPath="inset(10px round 20px)"
   * 
   * // Using SVG
   * clipPath="url(#myClip)"
   * 
   * // Complex paths
   * clipPath="path('M 0,0 L 100,100 L 0,100 Z')"
   * ```
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  clipPath?: string;
  


  /**
   * **`maskImage`**
   * 
   * CSS mask-image property. Defines an image to be used as a mask layer for an element.
   * 
   * **Values**:
   * - 'none': No mask layer image
   * - '<url>': URL of an image file (e.g., url('/mask.png'))
   * - '<gradient>': Any valid gradient function
   * - Multiple values separated by commas
   * 
   * **Examples**:
   * ```tsx
   * // Using gradients
   * maskImage="radial-gradient(circle at center, transparent 40px, black 41px)"
   * maskImage="linear-gradient(to right, transparent, black)"
   * 
   * // Using image URLs
   * maskImage="url('/path/to/mask.png')"
   * 
   * // Multiple masks
   * maskImage="linear-gradient(black, transparent), url('/mask.svg')"
   * ```
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  maskImage?: string;

  /**
   * **`maskSize`**
   * 
   * CSS mask-size property. Specifies the size of the mask layer image.
   * 
   * **Values**:
   * - 'auto': Default size of the mask image
   * - 'contain': Scale to fit within container
   * - 'cover': Scale to cover container
   * - '<length>': Fixed size (e.g., '100px')
   * - '<percentage>': Relative size (e.g., '50%')
   * - Multiple values separated by commas
   * 
   * **Examples**:
   * ```tsx
   * // Fixed sizes
   * maskSize="100px 100px"
   * maskSize="50% 50%"
   * 
   * // Keywords
   * maskSize="cover"
   * maskSize="contain"
   * 
   * // Multiple sizes for multiple masks
   * maskSize="100% 100%, 50px 50px"
   * ```
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  maskSize?: string;

  /**
   * **`maskRepeat`**
   * 
   * CSS mask-repeat property. Specifies how the mask layer image is repeated.
   * 
   * **Values**:
   * - 'repeat': Repeat in both directions
   * - 'repeat-x': Repeat horizontally
   * - 'repeat-y': Repeat vertically
   * - 'no-repeat': No repetition
   * - 'space': Repeated and spaced to fill area
   * - 'round': Repeated and scaled to fill area
   * - Multiple values separated by commas
   * 
   * **Examples**:
   * ```tsx
   * // Basic values
   * maskRepeat="no-repeat"
   * maskRepeat="repeat"
   * maskRepeat="repeat-x"
   * maskRepeat="repeat-y"
   * 
   * // Space and round
   * maskRepeat="space"
   * maskRepeat="round"
   * 
   * // Multiple values for multiple masks
   * maskRepeat="no-repeat, repeat"
   * ```
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  maskRepeat?: string;

  /**
   * **`maskPosition`**
   * 
   * CSS mask-position property. Sets the starting position of the mask layer image.
   * 
   * **Values**:
   * - 'top': Align to top
   * - 'bottom': Align to bottom
   * - 'left': Align to left
   * - 'right': Align to right
   * - 'center': Center alignment
   * - '<length>': Fixed position (e.g., '100px')
   * - '<percentage>': Relative position (e.g., '50%')
   * - Multiple values separated by commas
   * 
   * **Examples**:
   * ```tsx
   * // Keywords
   * maskPosition="center"
   * maskPosition="top right"
   * 
   * // Percentages
   * maskPosition="50% 50%"
   * maskPosition="0% 100%"
   * 
   * // Mixed units
   * maskPosition="20px 50%"
   * maskPosition="right 20px top 10px"
   * 
   * // Multiple positions for multiple masks
   * maskPosition="center, top right"
   * ```
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  maskPosition?: string;

  /**
   * **`transformOrigin`**
   * 
   * CSS transform-origin property. Sets the origin for an element's transformations.
   * 
   * **Type**: `string`
   * 
   * **Values**:
   * - Keywords: 'left', 'center', 'right', 'top', 'bottom'
   * - Percentages: '0%', '50%', '100%'
   * - Lengths: '20px', '5rem'
   * - Multiple values for X, Y, and Z axes
   * 
   * **Examples**:
   * ```tsx
   * transformOrigin="center"
   * transformOrigin="top left"
   * transformOrigin="50% 50%"
   * transformOrigin="20px 30px"
   * transformOrigin="left bottom 10px"
   * ```
   */
  transformOrigin?: string;
}

/**
 * Style Props Interface
 * 
 * A subset of BaseComponentProps that includes only styling-related props
 */
export type StyleProps = Omit<BaseComponentProps, 'children'>;

/**
 * Common Component Props Interface
 * 
 * Extends BaseComponentProps with common React props
 */
export interface CommonComponentProps extends BaseComponentProps {
  /**
   * **`children`**
   * 
   * Child elements to render inside the component.
   * 
   * **Type**: `ReactNode`
   * 
   * **Initial value**: `undefined`
   */
  children?: ReactNode;
  
  /**
   * **`id`**
   * 
   * Optional ID attribute for the element.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  id?: string;

  /**
   * **`bgColor`**
   * 
   * Alias for backgroundColor.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  bgColor?: string;
} 