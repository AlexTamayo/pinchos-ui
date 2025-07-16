import { ReactNode } from 'react';
import type { DivProps } from './Div.types';

/**
 * Responsive Container Props Interface
 * 
 * A comprehensive set of props for the ResponseContainer component that provides
 * conditional rendering based on a responsive condition while extending Flex functionality.
 */
export interface ResponseContainerProps extends Partial<DivProps> {
  /**
   * **`condition`**
   * 
   * Boolean flag that determines which set of props to apply (mobile or desktop).
   * - `true`: applies mobile props
   * - `false`: applies desktop props
   * 
   * **Type**: `boolean`
   * 
   * **Required**: Yes
   */
  condition: boolean;

  /**
   * **`className`**
   * 
   * Base CSS class name to apply to the container.
   * Will be combined with mobile/desktop class names.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `''`
   */
  className?: string;

  /**
   * **`mobileClassName`**
   * 
   * Additional CSS class name to apply when condition is true.
   * Will be combined with the base className.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `''`
   */
  mobileClassName?: string;

  /**
   * **`mobileProps`**
   * 
   * Flex props to apply when condition is true.
   * These will override any common props.
   * 
   * **Type**: `Partial<DivProps>`
   * 
   * **Initial value**: `{}`
   */
  mobileProps?: Partial<DivProps>;

  /**
   * **`desktopClassName`**
   * 
   * Additional CSS class name to apply when condition is false.
   * Will be combined with the base className.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `''`
   */
  desktopClassName?: string;

  /**
   * **`desktopProps`**
   * 
   * Flex props to apply when condition is false.
   * These will override any common props.
   * 
   * **Type**: `Partial<DivProps>`
   * 
   * **Initial value**: `{}`
   */
  desktopProps?: Partial<DivProps>;

  /**
   * **`children`**
   * 
   * Child elements to render inside the container.
   * 
   * **Type**: `ReactNode`
   * 
   * **Initial value**: `undefined`
   */
  children?: ReactNode;
}