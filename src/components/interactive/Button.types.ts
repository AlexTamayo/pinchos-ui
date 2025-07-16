import {
  ReactNode,
  HTMLAttributes,
} from 'react';
import {
  ButtonType,
  CommonComponentProps,
} from '@/types';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, CommonComponentProps {
  /**
   * **`hoverGlow`**
   * 
   * Whether to enable the mouse glow effect on hover.
   * When true, displays a circular glow effect that follows the mouse cursor.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `true`
   */
  hoverGlow?: boolean;

  /**
   * **`loadingSpinner`**
   * 
   * Whether to show a loading spinner when in loading state.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  loadingSpinner?: boolean;
  
  /**
   * **`loadingText`**
   * 
   * Text to display when in loading state.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `Loading...`
   */
  loadingText?: string;
  
  /**
   * **`leftIcon`**
   * 
   * Icon to display on the left side of the button.
   * 
   * **Type**: `ReactNode`
   * 
   * **Initial value**: `undefined`
   */
  leftIcon?: ReactNode;
  
  /**
   * **`rightIcon`**
   * 
   * Icon to display on the right side of the button.
   * 
   * **Type**: `ReactNode`
   * 
   * **Initial value**: `undefined`
   */
  rightIcon?: ReactNode;
  
  /**
   * **`iconSpacing`**
   * 
   * Spacing between icons and text.
   * 
   * **Type**: `number`
   * 
   * **Initial value**: `8`
   */
  iconSpacing?: number;
  
  /**
   * **`type`**
   * 
   * HTML button type.
   * 
   * **Type**: `ButtonType`
   * 
   * **Initial value**: `button`
   */
  type?: ButtonType;
  
  /**
   * **`disabled`**
   * 
   * Whether the button is disabled.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  disabled?: boolean;
  
  /**
   * **`loading`**
   * 
   * Whether the button is in loading state.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  loading?: boolean;

  /**
   * **`href`**
   * 
   * URL to navigate to when clicked.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `undefined`
   */
  href?: string;
  
  /**
   * **`target`**
   * 
   * Target for the href.
   * 
   * **Type**: `_blank | _self`
   * 
   * **Initial value**: `_blank`
   */
  target?: '_blank' | '_self';

  /**
   * **`onClick`**
   * 
   * Click event handler.
   * 
   * **Type**: `() => void`
   * 
   * **Initial value**: `undefined`
   */
  onClick?: () => void;

  /**
   * **`isActive`**
   * 
   * Whether the button is active.
   * 
   * **Type**: `boolean`
   * 
   * **Initial value**: `false`
   */
  isActive?: boolean;
}
