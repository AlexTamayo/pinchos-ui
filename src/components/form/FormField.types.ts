import {
  MouseEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { CommonComponentProps } from '@/types';

/**
 * Form Field Component Props Interface
 * 
 * A comprehensive set of props for the FormField component that provides
 * form input functionality with extensive styling and validation options.
 */
export interface FormFieldProps extends
          Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick'>,
          Omit<CommonComponentProps, 'onClick'> {
  /**
   * **`name`**
   * 
   * Field name for form registration.
   * 
   * **Type**: `string`
   * 
   * **Required**: Yes
   */
  name: string;

  /**
   * **`register`**
   * 
   * React Hook Form register function.
   * 
   * **Type**: `UseFormRegister<any>`
   * 
   * **Required**: Yes
   */
  register: UseFormRegister<any>;

  /**
   * **`error`**
   * 
   * Field error state from React Hook Form.
   * 
   * **Type**: `FieldError`
   * 
   * **Initial value**: `undefined`
   */
  error?: FieldError;

  /**
   * **`validation`**
   * 
   * React Hook Form validation rules.
   * 
   * **Type**: `RegisterOptions`
   * 
   * **Initial value**: `{}`
   */
  validation?: RegisterOptions;

  // Label Props
  /**
   * **`label`**
   * 
   * Label text for the form field.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  label?: string;

  /**
   * **`showLabel`**
   * 
   * Whether to show the label.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `true`
   */
  showLabel?: boolean;

  /**
   * **`labelAlign`**
   * 
   * Label text alignment.
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
  labelAlign?: 'left' | 'center' | 'right';

  /**
   * **`labelMarginBottom`**
   * 
   * Margin between label and input.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `8px`
   */
  labelMarginBottom?: string | number;

  /**
   * **`labelFontFamily`**
   * 
   * Font family for the label.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  labelFontFamily?: string;

  /**
   * **`labelFontSize`**
   * 
   * Font size for the label.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `16px`
   */
  labelFontSize?: string | number;

  /**
   * **`labelFontWeight`**
   * 
   * Font weight for the label.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `500`
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
  labelFontWeight?: string | number;

  /**
   * **`labelColor`**
   * 
   * Text color for the label.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  labelColor?: string;

  /**
   * **`labelPadding`**
   * 
   * Padding for the label text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**: Single value for all sides, or CSS padding shorthand
   * 
   * **Example**:
   * ```css
   * labelPadding: "10px"  // all sides
   * labelPadding: "5px 10px"  // vertical horizontal
   * ```
   */
  labelPadding?: string | number;

  // Input/Textarea Props
  /**
   * **`isTextArea`**
   * 
   * Whether to render as a textarea instead of input.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  isTextArea?: boolean;

  /**
   * **`rows`**
   * 
   * Number of rows for textarea.
   * Only applies when isTextArea is true.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `undefined`
   */
  rows?: number;

  /**
   * **`inputProps`**
   * 
   * Additional props for the input element.
   * 
   * **Type**: `InputHTMLAttributes<HTMLInputElement>`
   * 
   * **Initial value**: `{}`
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;

  /**
   * **`textAreaProps`**
   * 
   * Additional props for the textarea element.
   * Only applies when isTextArea is true.
   * 
   * **Type**: `TextareaHTMLAttributes<HTMLTextAreaElement>`
   * 
   * **Initial value**: `{}`
   */
  textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;

  // New prop for input element className
  inputClassName?: string;

  /**
   * **`inputBackgroundColor`**
   * 
   * Background color for the input/textarea element.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  inputBackgroundColor?: string;

  /**
   * **`inputPadding`**
   * 
   * Padding for the input/textarea.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `10px`
   */
  inputPadding?: string | number;

  /**
   * **`inputBorder`**
   * 
   * Border for the input/textarea.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `'1px solid #ccc'`
   * 
   * **Values**:
   * - `'none'` - No border
   * - `'hidden'` - Same as none
   * - `'dotted'` - Dotted border
   * - `'dashed'` - Dashed border
   * - `'solid'` - Solid border
   * - `'double'` - Double line border
   * - `'groove'` - 3D grooved border
   * - `'ridge'` - 3D ridged border
   * - `'inset'` - 3D inset border
   * - `'outset'` - 3D outset border
   * Can be combined with width and color values.
   */
  inputBorder?: string;

  /**
   * **`inputBorderRadius`**
   * 
   * Border radius for the input/textarea.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `5px`
   */
  inputBorderRadius?: string | number;

  /**
   * **`inputFontFamily`**
   * 
   * Font family for the input/textarea.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  inputFontFamily?: string;

  /**
   * **`inputFontSize`**
   * 
   * Font size for the input/textarea.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `16px`
   */
  inputFontSize?: string | number;

  /**
   * **`inputFontWeight`**
   * 
   * Font weight for the input/textarea.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `400`
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
  inputFontWeight?: string | number;

  /**
   * **`inputColor`**
   * 
   * Text color for the input/textarea.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  inputColor?: string;

  /**
   * **`inputMinHeight`**
   * 
   * Minimum height for textarea.
   * Only applies when isTextArea is true.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `120px`
   */
  inputMinHeight?: string | number;

  /**
   * **`inputHeight`**
   * 
   * Height for input/textarea.
   * For textarea, can be used with clamp() for responsive sizing.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```tsx
   * inputHeight="8rem"
   * inputHeight="clamp(8rem, 30vh, 40rem)"
   * ```
   */
  inputHeight?: string | number;

  /**
   * **`inputResize`**
   * 
   * Resize behavior for textarea.
   * Only applies when isTextArea is true.
   * 
   * **Type**: `'none' | 'both' | 'horizontal' | 'vertical'`
   * 
   * **Initial value**: `vertical`
   * 
   * **Values**:
   * - `'none'` - No resizing allowed
   * - `'both'` - Can resize both width and height
   * - `'horizontal'` - Can only resize width
   * - `'vertical'` - Can only resize height
   */
  inputResize?: 'none' | 'both' | 'horizontal' | 'vertical';
  
  /**
   * **`inputSelectionTextColor`**
   * 
   * Text color of selected text within the input/textarea.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Example**:
   * ```css
   * inputSelectionTextColor: "#ffffff"
   * ```
   */
  inputSelectionTextColor?: string;

  /**
   * **`inputSelectionBackgroundColor`**
   * 
   * Background color of selected text within the input/textarea.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Example**:
   * ```css
   * inputSelectionBackgroundColor: "rgba(255, 0, 0, 0.5)"
   * ```
   */
  inputSelectionBackgroundColor?: string;

  /**
   * **`caretColor`**
   * 
   * Color of the input caret/cursor.
   * 
   * **Type**: `'auto' | 'transparent' | string`
   * 
   * **Initial value**: `'auto'`
   * 
   * **Values**:
   * - `'auto'` - Default browser caret color
   * - `'transparent'` - Invisible caret
   * - Any valid CSS color value
   */
  caretColor?: string;

  /**
   * **`userSelect`**
   * 
   * Whether text can be selected.
   * 
   * **Type**: `'none' | 'text' | 'all' | 'auto'`
   * 
   * **Initial value**: `text`
   * 
   * **Values**:
   * - `'none'` - Text cannot be selected
   * - `'text'` - Text can be selected
   * - `'all'` - All content can be selected
   * - `'auto'` - Default browser behavior
   */
  userSelect?: 'none' | 'text' | 'all' | 'auto';

  // Placeholder Props
  /**
   * **`placeholderFontFamily`**
   * 
   * Font family for the placeholder text.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  placeholderFontFamily?: string;

  /**
   * **`placeholderFontSize`**
   * 
   * Font size for the placeholder text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   */
  placeholderFontSize?: string | number;

  /**
   * **`placeholderFontWeight`**
   * 
   * Font weight for the placeholder text.
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
  placeholderFontWeight?: string | number;

  /**
   * **`placeholderColor`**
   * 
   * Text color for the placeholder.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  placeholderColor?: string;

  // Disabled State Props
  /**
   * **`disabledOpacity`**
   * 
   * Opacity when disabled.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `0.65`
   */
  disabledOpacity?: number;

  /**
   * **`disabledBackgroundColor`**
   * 
   * Background color when disabled.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `#f8f9fa`
   */
  disabledBackgroundColor?: string;

  /**
   * **`disabledBorderColor`**
   * 
   * Border color when disabled.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `#dee2e6`
   */
  disabledBorderColor?: string;

  /**
   * **`disabledColor`**
   * 
   * Text color when disabled.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `#6c757d`
   */
  disabledColor?: string;

  // Error Props
  /**
   * **`errorBorder`**
   * 
   * Border style for the input/textarea when in error state.
   * Takes precedence over inputBorder when there is an error.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Examples**:
   * ```css
   * errorBorder: "2px solid red"
   * errorBorder: "1px dashed #ff0000"
   * ```
   */
  errorBorder?: string;

  /**
   * **`errorFontFamily`**
   * 
   * Font family for the error message.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  errorFontFamily?: string;

  /**
   * **`errorFontSize`**
   * 
   * Font size for error message.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `14px`
   */
  errorFontSize?: string | number;

  /**
   * **`errorFontWeight`**
   * 
   * Font weight for the error message.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `400`
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
  errorFontWeight?: string | number;

  /**
   * **`errorColor`**
   * 
   * Color for error message.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `red`
   */
  errorColor?: string;

  /**
   * **`errorMarginTop`**
   * 
   * Margin above error message.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `4px`
   */
  errorMarginTop?: string | number;

  /**
   * **`errorMinHeight`**
   * 
   * Minimum height for error message container.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `20px`
   */
  errorMinHeight?: string | number;

  /**
   * **`errorPadding`**
   * 
   * Padding for the error message text.
   * 
   * **Type**: `string | number`
   * 
   * **Initial value**: `undefined`
   * 
   * **Format**: Single value for all sides, or CSS padding shorthand
   * 
   * **Example**:
   * ```css
   * errorPadding: "10px"  // all sides
   * errorPadding: "5px 10px"  // vertical horizontal
   * ```
   */
  errorPadding?: string | number;

  /**
   * **`onClick`**
   * 
   * Event handler for click events on the form field container.
   * 
   * **Type**: `(event: MouseEvent<HTMLElement>) => void`
   * 
   * **Initial value**: `undefined`
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;

  /**
   * **`defaultValue`**
   * 
   * The default value for the input or textarea field.
   * This is used to prefill the field when the form is initially rendered.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   * 
   * **Example**:
   * ```tsx
   * <FormField
   *   name="message"
   *   defaultValue="Hello, world!"
   * />
   * ```
   */
  defaultValue?: string;
} 