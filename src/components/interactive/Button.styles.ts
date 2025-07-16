import styled, { css } from 'styled-components';
import { getValueWithUnit, getStyledValue } from '@/utils';
import { CommonComponentProps, commonStyledProps } from '@/types';
import { THEME_TRANSITION_TIME, DEFAULT_TRANSITION_TIME } from '@/styles/constants';

// Internal state props that shouldn't be forwarded to DOM
interface StyledButtonInternalProps {
  $isActive?: boolean;
  $isThemeTransition?: boolean;
  $isDisabled?: boolean;
  $isLoading?: boolean;
  $hasLeftIcon?: boolean;
  $hasRightIcon?: boolean;
  $iconSpacing?: number;
  $debug?: boolean;
  $debugBGColor?: string;
}

// Combined props interface
interface StyledButtonProps extends StyledButtonInternalProps, CommonComponentProps {
}

// Props that shouldn't be forwarded to DOM
const internalProps = new Set([
  // Internal state props
  '$isActive',
  '$isThemeTransition',
  '$isDisabled',
  '$isLoading',
  '$hasLeftIcon',
  '$hasRightIcon',
  '$iconSpacing',
  '$debug',
  '$debugBGColor',
  ...commonStyledProps,
]);

// Props that should be forwarded to DOM
const forwardProps = new Set([
  'onClick',
  'onMouseEnter',
  'onMouseLeave',
  'onFocus',
  'onBlur',
  'type',
  'disabled',
  'aria-label',
  'aria-describedby',
  'tabIndex',
  'role',
  'id',
  'className',
  'style',
]);

// shouldForwardProp function
const shouldForwardProp = (prop: string): boolean => {
  // Always forward props in forwardProps set
  if (forwardProps.has(prop)) return true;
  // Never forward props in internalProps set
  if (internalProps.has(prop)) return false;
  // Forward all other props
  return true;
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp,
})<StyledButtonProps>`
  /* Base styles */
  position: ${props => getStyledValue(props.position) || 'relative'};
  display: ${props => getStyledValue(props.display) || 'inline-flex'};
  
  /* Conditional flex properties */
  ${props => (props.display === 'flex' || 'inline-flex') && css`
    align-items: ${getStyledValue(props.alignItems) || 'center'};
    justify-content: ${getStyledValue(props.justifyContent) || 'center'};
  `}
  
  gap: ${props => getValueWithUnit(props.$iconSpacing) || '8px'};
  padding: ${props => getStyledValue(props.padding) || '0.5rem 1rem'};
  margin: ${props => getStyledValue(props.margin)};
  
  /* Layout & Sizing */
  min-width: ${props => getValueWithUnit(props.minWidth)};
  min-height: ${props => getValueWithUnit(props.minHeight)};
  max-width: ${props => getValueWithUnit(props.maxWidth)};
  max-height: ${props => getValueWithUnit(props.maxHeight)};
  width: ${props => props.fullWidth ? '100%' : getValueWithUnit(props.width)};
  height: ${props => props.fullHeight ? '100%' : getValueWithUnit(props.height)};
  align-self: ${props => getStyledValue(props.alignSelf)};
  
  /* Typography */
  font-size: ${props => getValueWithUnit(props.fontSize) || '1rem'};
  font-weight: ${props => getStyledValue(props.fontWeight) || '500'};
  font-family: ${props => getStyledValue(props.fontFamily)};
  text-align: ${props => getStyledValue(props.textAlign)};
  /* text-wrap: ${props => getStyledValue(props.textWrap)}; */
  text-transform: ${props => getStyledValue(props.textTransform)};
  letter-spacing: ${props => getStyledValue(props.letterSpacing)};
  line-height: ${props => getStyledValue(props.lineHeight)};
  
  /* Colors and backgrounds */
  color: ${props => getStyledValue(props.color) || '#000'};
  background: ${props => getStyledValue(props.background)};
  background-color: ${props => {
    if (props.$debug && props.$debugBGColor) return props.$debugBGColor;
    return getStyledValue(props.backgroundColor || props.bgColor) || '#fff';
  }};
  background-image: ${props => getStyledValue(props.backgroundImage)};
  background-position: ${props => getStyledValue(props.backgroundPosition)};
  background-repeat: ${props => getStyledValue(props.backgroundRepeat)};
  background-size: ${props => getStyledValue(props.backgroundSize)};
  filter: ${props => getStyledValue(props.filter)};
  backdrop-filter: ${props => getStyledValue(props.backdropFilter)};
  border-radius: ${props => getValueWithUnit(props.borderRadius) || '4px'};
  
  /* Borders */
  ${props => getStyledValue(props.border) && css`
    border: ${props.border};
  `}
  ${props => getStyledValue(props.borderWidth) && css`
    border-width: ${getValueWithUnit(props.borderWidth)};
  `}
  ${props => getStyledValue(props.borderStyle) && css`
    border-style: ${props.borderStyle};
  `}
  ${props => getStyledValue(props.borderColor) && css`
    border-color: ${props.borderColor};
  `}
  
  /* Box shadow */
  box-shadow: ${props => getStyledValue(props.boxShadow) || '0 2px 4px rgba(0, 0, 0, 0.1)'};
  
  /* Animations and transforms */
  animation: ${props => getStyledValue(props.animation)};
  transform: ${props => getStyledValue(props.transform)};
  transform-origin: ${props => getStyledValue(props.transformOrigin)};
  
  /* Base transitions */
  transition:
    background-color ${props => props.transition || DEFAULT_TRANSITION_TIME},
    border-color ${props => props.transition || DEFAULT_TRANSITION_TIME},
    color ${props => props.transition || DEFAULT_TRANSITION_TIME},
    opacity ${props => props.transition || DEFAULT_TRANSITION_TIME},
    transform ${props => props.transition || DEFAULT_TRANSITION_TIME},
    box-shadow ${props => props.transition || DEFAULT_TRANSITION_TIME},
    border-radius ${props => props.transition || DEFAULT_TRANSITION_TIME};
  
  /* Mask properties */
  mask-image: ${props => getStyledValue(props.maskImage)};
  -webkit-mask-image: ${props => getStyledValue(props.maskImage)};
  mask-size: ${props => getStyledValue(props.maskSize)};
  -webkit-mask-size: ${props => getStyledValue(props.maskSize)};
  mask-repeat: ${props => getStyledValue(props.maskRepeat)};
  -webkit-mask-repeat: ${props => getStyledValue(props.maskRepeat)};
  mask-position: ${props => getStyledValue(props.maskPosition)};
  -webkit-mask-position: ${props => getStyledValue(props.maskPosition)};
  clip-path: ${props => getStyledValue(props.clipPath)};
  -webkit-clip-path: ${props => getStyledValue(props.clipPath)};
  
  /* States */
  &:hover:not(:disabled) {
    color: ${props => getStyledValue(props.hoverColor)};
    background-color: ${props => getStyledValue(props.hoverBackgroundColor)};
    box-shadow: ${props => getStyledValue(props.hoverBoxShadow) || '0 4px 8px rgba(0, 0, 0, 0.2)'};
    cursor: pointer;
    ${props => getStyledValue(props.hoverBorder) && css`
      border: ${props.hoverBorder};
    `}
    ${props => getStyledValue(props.hoverBorderWidth) && css`
      border-width: ${getValueWithUnit(props.hoverBorderWidth)};
    `}
    ${props => getStyledValue(props.hoverBorderStyle) && css`
      border-style: ${props.hoverBorderStyle};
    `}
    ${props => getStyledValue(props.hoverBorderColor) && css`
      border-color: ${props.hoverBorderColor};
    `}
    ${props => getStyledValue(props.hoverBorderRadius) && css`
      border-radius: ${props.hoverBorderRadius};
    `}
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    background-color: #f8f9fa;
    border-color: #dee2e6;
    color: #6c757d;
    box-shadow: none !important;
  }

  /* Focus state */
  &:focus {
    outline: ${props => getStyledValue(props.focusOutline)};
    outline-offset: ${props => getValueWithUnit(props.focusOutlineOffset)};
    border-color: ${props => getStyledValue(props.focusBorderColor)};
    box-shadow: ${props => getStyledValue(props.focusBoxShadow)};
  }

  /* Active state */
  &:active {
    background-color: ${props => getStyledValue(props.activeBackgroundColor)};
    color: ${props => getStyledValue(props.activeColor)};
    transform: ${props => getStyledValue(props.activeTransform)};
    box-shadow: ${props => getStyledValue(props.activeBoxShadow)};

    ${props => getStyledValue(props.activeBorder) && css`
      border: ${props.activeBorder};
    `}
    ${props => getStyledValue(props.activeBorderWidth) && css`
      border-width: ${getValueWithUnit(props.activeBorderWidth)};
    `}
    ${props => getStyledValue(props.activeBorderStyle) && css`
      border-style: ${props.activeBorderStyle};
    `}
    ${props => getStyledValue(props.activeBorderColor) && css`
      border-color: ${props.activeBorderColor};
    `}
    ${props => getStyledValue(props.activeBorderRadius) && css`
      border-radius: ${props.activeBorderRadius};
    `}
  }
  
  /* Loading state */
  ${props => props.$isLoading && `
    cursor: wait;
    opacity: 0.8;
  `}
  
  /* Theme transition */
  ${props => props.$isThemeTransition && css`
    &:not(:hover) {
      transition:
        background-color ${THEME_TRANSITION_TIME},
        border-color ${THEME_TRANSITION_TIME},
        color ${THEME_TRANSITION_TIME};
    }
  `}
  
  /* Icon positioning */
  .left-icon {
    margin-right: ${props => getValueWithUnit(props.$iconSpacing) || '8px'};
  }
  
  .right-icon {
    margin-left: ${props => getValueWithUnit(props.$iconSpacing) || '8px'};
  }
  
  /* Loading spinner */
  .spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;