import {
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { debugLog } from '@/utils';
import { useGlowEffect } from '@/hooks';
import { StyledButton } from './Button.styles';

import type { ButtonProps } from './Button.types';

/**
 * Button Component
 * 
 * A versatile button component that supports loading states, icons, URL navigation,
 * and mouse glow effects. Can be used as either a button or a link.
 * 
 * @example
 * // Basic usage
 * <Button onClick={() => console.log('clicked')}>
 *   Click Me
 * </Button>
 * 
 * @example
 * // Loading state with spinner
 * <Button 
 *   loading={true}
 *   loadingSpinner={true}
 *   loadingText="Processing..."
 * >
 *   Submit
 * </Button>
 * 
 * @example
 * // With icons and custom styling
 * <Button
 *   leftIcon={<IconComponent />}
 *   rightIcon={<ArrowIcon />}
 *   iconSpacing={12}
 *   hoverGlow={true}
 *   isActive={true}
 * >
 *   Navigate
 * </Button>
 * 
 * @example
 * // As a link with target
 * <Button
 *   href="https://example.com"
 *   target="_blank"
 * >
 *   External Link
 * </Button>
 * 
 * @example
 * // Debug mode
 * <Button debug debugBGColor="rgba(0,255,0,0.2)">
 *   Debug Button
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  // Core props
  children,
  className,
  
  // Button-specific props
  hoverGlow = true,
  loadingSpinner = false,
  loadingText = 'Loading...',
  leftIcon,
  rightIcon,
  iconSpacing = 8,
  type = 'button',
  disabled = false,
  loading = false,

  // URL-related props
  href,
  target = '_blank',
  onClick,
  
  // Theme transition
  isThemeTransition,
  
  // Active state
  isActive = false,
  
  // Debug props
  debug,
  debugBGColor,
  
  ...rest
}, forwardedRef) => {
  
  // Create a local ref that we can use with useGlowEffect
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Sync our local ref with the forwarded ref
  useImperativeHandle(forwardedRef, () => buttonRef.current!);
  
  // Use our local ref for the glow effect
  useGlowEffect(buttonRef);

  debugLog(
    false,
    buttonRef.current,
  );

  const content = loading ? (
    <>
      {loadingSpinner && <span className="spinner" />}
      {loadingText}
    </>
  ) : (
    <>
      {leftIcon && <span className="left-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="right-icon">{rightIcon}</span>}
    </>
  );

  // Handle URL navigation
  const handleClick = () => {
    if (href) {
      if (target === '_blank') {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    }
    // Still call the original onClick if provided
    onClick?.();
  };

  return (
    <StyledButton
      ref={buttonRef}
      type={type}
      $isActive={isActive}
      $isThemeTransition={isThemeTransition}
      $isDisabled={disabled}
      $isLoading={loading}
      $hasLeftIcon={!!leftIcon}
      $hasRightIcon={!!rightIcon}
      $iconSpacing={iconSpacing}
      $debug={debug}
      $debugBGColor={debugBGColor}
      className={`button ${className || ''} ${hoverGlow ? 'mouse-glow-effect' : ''}`.trim()}
      onClick={handleClick}
      disabled={disabled || loading}
      {...rest}
    >
      {content}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
