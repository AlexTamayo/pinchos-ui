import { ReactNode, ComponentType, HTMLAttributes } from "react";

/**
 * Conditional Wrapper Props Interface
 * 
 * A generic interface for the ConditionalWrapper component that provides
 * conditional component wrapping functionality with type safety.
 */
interface ConditionalWrapperProps<T = HTMLAttributes<HTMLElement>> {
  /**
   * **`condition`**
   * 
   * Boolean flag that determines whether to wrap the children.
   * - When true: wraps children with the specified wrapper component
   * - When false: renders children directly without wrapping
   * 
   * **Type**: `boolean`
   * 
   * **Required**: Yes
   */
  condition: boolean;

  /**
   * **`wrapper`**
   * 
   * The component to use as a wrapper when condition is true.
   * Can be any React component that accepts the generic props type T.
   * 
   * **Type**: `ComponentType<T>`
   * 
   * **Required**: Yes
   */
  wrapper: ComponentType<T>;

  /**
   * **`wrapperProps`**
   * 
   * Props to pass to the wrapper component when condition is true.
   * Type T extends HTMLAttributes for basic HTML element support.
   * 
   * **Type**: `T`
   * 
   * **Initial value**: `{}`
   */
  wrapperProps?: T;

  /**
   * **`children`**
   * 
   * Child elements to be conditionally wrapped.
   * 
   * **Type**: `ReactNode`
   * 
   * **Initial value**: `undefined`
   */
  children?: ReactNode;
}

/**
 * Conditional Wrapper Component
 * 
 * A generic component that conditionally wraps its children with another component.
 * Provides type safety for wrapper component props and maintains clean JSX structure.
 * 
 * @template T - Type of props accepted by the wrapper component
 * 
 * @example
 * // Basic usage with div wrapper
 * <ConditionalWrapper
 *   condition={shouldWrap}
 *   wrapper={Flex}
 *   wrapperProps={{ flexDirection: "column" }}
 * >
 *   <div>Child content</div>
 * </ConditionalWrapper>
 * 
 * @example
 * // Using with custom component
 * <ConditionalWrapper
 *   condition={isDesktop}
 *   wrapper={Card}
 *   wrapperProps={{ 
 *     elevation: 2,
 *     className: "custom-card"
 *   }}
 * >
 *   <p>Card content shown only on desktop</p>
 * </ConditionalWrapper>
 * 
 * @example
 * // Type-safe usage with strict props
 * interface CustomWrapperProps {
 *   title: string;
 *   onClose: () => void;
 * }
 * 
 * <ConditionalWrapper<CustomWrapperProps>
 *   condition={isOpen}
 *   wrapper={Modal}
 *   wrapperProps={{
 *     title: "Settings",
 *     onClose: handleClose
 *   }}
 * >
 *   <div>Modal content</div>
 * </ConditionalWrapper>
 */
export const ConditionalWrapper = <T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>>({
  condition,
  wrapper: Wrapper,
  wrapperProps = {} as T,
  children,
}: ConditionalWrapperProps<T>) => {
  return condition ? (
    <Wrapper {...wrapperProps}>
      {children}
    </Wrapper>
  ) : (
    <>{children}</>
  );
};