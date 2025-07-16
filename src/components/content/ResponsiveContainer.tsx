import { forwardRef } from 'react';
import { Flex } from "@/components";

import type { ResponseContainerProps } from './ResponsiveContainer.types';

/**
 * Responsive Container Component
 * 
 * A wrapper component that extends Flex functionality with conditional rendering
 * based on a responsive condition. Allows different props and classes to be applied
 * for mobile and desktop views.
 * 
 * @example
 * // Basic usage with different styles for mobile/desktop
 * <ResponseContainer
 *   condition={isMobile}
 *   mobileProps={{ flexDirection: 'column' }}
 *   desktopProps={{ flexDirection: 'row' }}
 * >
 *   <div>Child 1</div>
 *   <div>Child 2</div>
 * </ResponseContainer>
 * 
 * @example
 * // Using with className variations
 * <ResponseContainer
 *   condition={isMobile}
 *   className="base-class"
 *   mobileClassName="mobile-specific"
 *   desktopClassName="desktop-specific"
 *   mobileProps={{ gap: 10 }}
 *   desktopProps={{ gap: 20 }}
 * >
 *   <div>Responsive content</div>
 * </ResponseContainer>
 * 
 * @example
 * // With common props that apply to both modes
 * <ResponseContainer
 *   condition={isMobile}
 *   width="100%"
 *   height={200}
 *   bgColor="#f5f5f5"
 *   mobileProps={{ padding: 10 }}
 *   desktopProps={{ padding: 20 }}
 * >
 *   <div>Content with common and conditional styling</div>
 * </ResponseContainer>
 */
export const ResponseContainer = forwardRef<HTMLDivElement, ResponseContainerProps>(
  (
    {
      condition,
      mobileClassName = '',
      mobileProps = {},
      desktopClassName = '',
      desktopProps = {},
      className = '',
      children,
      ...commonProps
    },
    ref
  ) => {
    const combinedClassName = `${className} ${
      condition ? mobileClassName : desktopClassName
    }`.trim();

    return (
      <Flex
        ref={ref}
        className={combinedClassName}
        {...commonProps}
        {...(condition ? mobileProps : desktopProps)}
      >
        {children}
      </Flex>
    );
  }
);

ResponseContainer.displayName = 'ResponseContainer';