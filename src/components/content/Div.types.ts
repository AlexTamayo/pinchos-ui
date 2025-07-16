import {
  HTMLAttributes,
} from 'react';
import {
  CommonComponentProps,
} from '@/types';

// Omit the style property from HTMLAttributes to avoid conflict with CommonComponentProps
export interface DivProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, CommonComponentProps {
  /**
   * **`float`**
   * 
   * CSS float property. Specifies how an element should float.
   * - 'left': Element floats to the left
   * - 'right': Element floats to the right
   * - 'none': Element does not float
   * 
   * **Type**: `'left' | 'right' | 'none'`
   * 
   * **Initial value**: `none`
   */
  float?: 'left' | 'right' | 'none';

  /**
   * **`shapeOutside`**
   * 
   * CSS shape-outside property. Defines a shape around which text can wrap.
   * 
   * **Type**: `string`
   * 
   * **Initial value**: `none`
   */
  shapeOutside?: string;
} 