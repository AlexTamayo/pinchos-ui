import React, { forwardRef } from 'react';
import { StyledDiv } from './Div.styles';
import { DivProps } from './Div.types';

/**
 * Div Component
 * 
 * A base component that provides a styled div element with comprehensive styling capabilities.
 * This component serves as the foundation for other layout components like Flex.
 * 
 * @example
 * // Basic usage
 * <Div padding="20px" backgroundColor="blue">
 *   Content
 * </Div>
 * 
 * @example
 * // With hover effects
 * <Div 
 *   padding="20px"
 *   backgroundColor="white"
 *   hoverBackgroundColor="gray"
 *   transition="background-color 0.3s"
 * >
 *   Hover me
 * </Div>
 * 
 * @example
 * // With custom styling
 * <Div
 *   width="300px"
 *   height="200px"
 *   borderRadius="10px"
 *   boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
 *   backgroundColor="white"
 * >
 *   Styled content
 * </Div>
 */
export const Div = forwardRef<HTMLDivElement, DivProps>(({
  children,
  debug,
  debugBGColor,
  ...props
}, ref) => {
  return (
    <StyledDiv
      ref={ref}
      $debug={debug}
      $debugBGColor={debugBGColor}
      {...props}
    >
      {children}
    </StyledDiv>
  );
});

Div.displayName = 'Div';
