import { CommonComponentProps } from '@/types';
import { ReactNode } from 'react';

type TextAlign = 'left' | 'center' | 'right';

/**
 * Form Component Props Interface
 * 
 * A comprehensive set of props for the Form component that provides
 * form functionality with customizable title, description, and status sections.
 */
export interface FormProps extends CommonComponentProps {
  /**
   * **`onSubmit`**
   * 
   * Handler function called when the form is submitted.
   * 
   * **Type**: `(data: any) => Promise<void>`
   * 
   * **Required**: Yes
   */
  onSubmit: (data: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any) => Promise<void>;

  /**
   * **`children`**
   * 
   * Form content/fields to be rendered.
   * 
   * **Type**: `ReactNode`
   * 
   * **Required**: Yes
   */
  children: ReactNode;

  // Title props
  /**
   * **`showTitle`**
   * 
   * Whether to display the form title.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  showTitle?: boolean;

  /**
   * **`title`**
   * 
   * Text content of the form title.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  title?: string;

  /**
   * **`titleAlign`**
   * 
   * Alignment of the title text.
   * 
   * **Type**: `'left' | 'center' | 'right'`
   * 
   * **Initial value**: `'left'`
   * 
   * **Values**:
   * - `'left'` - Align text to the left
   * - `'center'` - Center text horizontally
   * - `'right'` - Align text to the right
   */
  titleAlign?: TextAlign;

  /**
   * **`titlePadding`**
   * 
   * Padding around the title text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**:
   * - Single value: `'10px'` (all sides)
   * - Two values: `'10px 20px'` (vertical horizontal)
   * - Three values: `'10px 20px 30px'` (top horizontal bottom)
   * - Four values: `'10px 20px 30px 40px'` (top right bottom left)
   * 
   * **Example**:
   * ```css
   * titlePadding: "10px"  // all sides
   * titlePadding: "5px 10px"  // vertical horizontal
   * titlePadding: "10px 20px 30px"  // top horizontal bottom
   * titlePadding: "10px 20px 30px 40px"  // top right bottom left
   * ```
   */
  titlePadding?: string | number;

  /**
   * **`titleFontFamily`**
   * 
   * Font family for the title text.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  titleFontFamily?: string;

  /**
   * **`titleFontSize`**
   * 
   * Font size for the title text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  titleFontSize?: string | number;

  /**
   * **`titleFontWeight`**
   * 
   * Font weight for the title text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `100` - Thin
   * - `200` - Extra Light
   * - `300` - Light
   * - `400` - Regular
   * - `500` - Medium
   * - `600` - Semi Bold
   * - `700` - Bold
   * - `800` - Extra Bold
   * - `900` - Black
   * - `'normal'` - Same as 400
   * - `'bold'` - Same as 700
   */
  titleFontWeight?: string | number;

  /**
   * **`titleColor`**
   * 
   * Color of the title text.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  titleColor?: string;

  // Description props
  /**
   * **`showDescription`**
   * 
   * Whether to display the form description.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  showDescription?: boolean;

  /**
   * **`description`**
   * 
   * Text content of the form description.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  description?: string;

  /**
   * **`descriptionAlign`**
   * 
   * Alignment of the description text.
   * 
   * **Type**: `'left' | 'center' | 'right'`
   * 
   * **Initial value**: `'left'`
   * 
   * **Values**:
   * - `'left'` - Align text to the left
   * - `'center'` - Center text horizontally
   * - `'right'` - Align text to the right
   */
  descriptionAlign?: TextAlign;

  /**
   * **`descriptionPadding`**
   * 
   * Padding around the description text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**:
   * - Single value: `'10px'` (all sides)
   * - Two values: `'10px 20px'` (vertical horizontal)
   * - Three values: `'10px 20px 30px'` (top horizontal bottom)
   * - Four values: `'10px 20px 30px 40px'` (top right bottom left)
   * 
   * **Example**:
   * ```css
   * descriptionPadding: "10px"  // all sides
   * descriptionPadding: "5px 10px"  // vertical horizontal
   * descriptionPadding: "10px 20px 30px"  // top horizontal bottom
   * descriptionPadding: "10px 20px 30px 40px"  // top right bottom left
   * ```
   */
  descriptionPadding?: string | number;

  /**
   * **`descriptionMargin`**
   * 
   * Margin around the description container.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**:
   * - Single value: `'10px'` (all sides)
   * - Two values: `'10px 20px'` (vertical horizontal)
   * - Three values: `'10px 20px 30px'` (top horizontal bottom)
   * - Four values: `'10px 20px 30px 40px'` (top right bottom left)
   * 
   * **Example**:
   * ```css
   * descriptionMargin: "10px"  // all sides
   * descriptionMargin: "5px 10px"  // vertical horizontal
   * descriptionMargin: "10px 20px 30px"  // top horizontal bottom
   * descriptionMargin: "10px 20px 30px 40px"  // top right bottom left
   * ```
   */
  descriptionMargin?: string | number;

  /**
   * **`descriptionFontFamily`**
   * 
   * Font family for the description text.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  descriptionFontFamily?: string;

  /**
   * **`descriptionFontSize`**
   * 
   * Font size for the description text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  descriptionFontSize?: string | number;

  /**
   * **`descriptionFontWeight`**
   * 
   * Font weight for the description text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `100` - Thin
   * - `200` - Extra Light
   * - `300` - Light
   * - `400` - Regular
   * - `500` - Medium
   * - `600` - Semi Bold
   * - `700` - Bold
   * - `800` - Extra Bold
   * - `900` - Black
   * - `'normal'` - Same as 400
   * - `'bold'` - Same as 700
   */
  descriptionFontWeight?: string | number;

  /**
   * **`descriptionColor`**
   * 
   * Color of the description text.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  descriptionColor?: string;

  // Status message props
  /**
   * **`statusMessageColor`**
   * 
   * Color of the status message text.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  statusMessageColor?: string;

  /**
   * **`statusMessageFontSize`**
   * 
   * Font size for the status message.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  statusMessageFontSize?: string | number;

  /**
   * **`statusMessageFontWeight`**
   * 
   * Font weight for the status message.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Values**:
   * - `100` - Thin
   * - `200` - Extra Light
   * - `300` - Light
   * - `400` - Regular
   * - `500` - Medium
   * - `600` - Semi Bold
   * - `700` - Bold
   * - `800` - Extra Bold
   * - `900` - Black
   * - `'normal'` - Same as 400
   * - `'bold'` - Same as 700
   */
  statusMessageFontWeight?: string | number;

  /**
   * **`statusMessageFontFamily`**
   * 
   * Font family for the status message.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  statusMessageFontFamily?: string;

  /**
   * **`statusMessagePadding`**
   * 
   * Padding around the status message.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**:
   * - Single value: `'10px'` (all sides)
   * - Two values: `'10px 20px'` (vertical horizontal)
   * - Three values: `'10px 20px 30px'` (top horizontal bottom)
   * - Four values: `'10px 20px 30px 40px'` (top right bottom left)
   * 
   * **Example**:
   * ```css
   * statusMessagePadding: "10px"  // all sides
   * statusMessagePadding: "5px 10px"  // vertical horizontal
   * statusMessagePadding: "10px 20px 30px"  // top horizontal bottom
   * statusMessagePadding: "10px 20px 30px 40px"  // top right bottom left
   * ```
   */
  statusMessagePadding?: string | number;

  /**
   * **`statusMessageMargin`**
   * 
   * Margin around the status message container.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**:
   * - Single value: `'10px'` (all sides)
   * - Two values: `'10px 20px'` (vertical horizontal)
   * - Three values: `'10px 20px 30px'` (top horizontal bottom)
   * - Four values: `'10px 20px 30px 40px'` (top right bottom left)
   * 
   * **Example**:
   * ```css
   * statusMessageMargin: "10px"  // all sides
   * statusMessageMargin: "5px 10px"  // vertical horizontal
   * statusMessageMargin: "10px 20px 30px"  // top horizontal bottom
   * statusMessageMargin: "10px 20px 30px 40px"  // top right bottom left
   * ```
   */
  statusMessageMargin?: string | number;
} 