import styled, { css } from 'styled-components';
import { getValueWithUnit, getStyledValue } from '@/utils';
import { commonStyledProps } from '@/types';
import { DivProps } from './Div.types';

// Internal state props that shouldn't be forwarded to DOM
interface StyledDivInternalProps {
  $isThemeTransition?: boolean;
  $debug?: boolean;
  $debugBGColor?: string;
}

// Combined props interface
interface StyledDivProps extends StyledDivInternalProps, DivProps {}

// Props that shouldn't be forwarded to DOM
const internalProps = new Set([
  // Internal state props
  '$isThemeTransition',
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

export const StyledDiv = styled.div.withConfig({
  shouldForwardProp,
})<StyledDivProps>`
  /* Base styles */
  position: ${props => getStyledValue(props.position) || 'relative'};
  display: ${props => getStyledValue(props.display)};
  box-sizing: ${props => getStyledValue(props.boxSizing) || 'border-box'};
  
  /* Positioning */
  top: ${props => getValueWithUnit(props.top)};
  right: ${props => getValueWithUnit(props.right)};
  left: ${props => getValueWithUnit(props.left)};
  bottom: ${props => getValueWithUnit(props.bottom)};
  z-index: ${props => getStyledValue(props.zIndex)};
  
  /* Overflow handling */
  overflow: ${props => getStyledValue(props.overflow)};
  overflow-x: ${props => getStyledValue(props.overflowX)};
  overflow-y: ${props => getStyledValue(props.overflowY)};
  
  /* Layout & Sizing */
  padding: ${props => getValueWithUnit(props.padding)};
  margin: ${props => getValueWithUnit(props.margin)};
  margin-top: ${props => getValueWithUnit(props.marginTop)};
  margin-right: ${props => getValueWithUnit(props.marginRight)};
  margin-bottom: ${props => getValueWithUnit(props.marginBottom)};
  margin-left: ${props => getValueWithUnit(props.marginLeft)};
  min-width: ${props => getValueWithUnit(props.minWidth)};
  min-height: ${props => getValueWithUnit(props.minHeight)};
  max-width: ${props => getValueWithUnit(props.maxWidth)};
  max-height: ${props => getValueWithUnit(props.maxHeight)};
  width: ${props => props.fullWidth ? '100%' : getValueWithUnit(props.width)};
  height: ${props => props.fullHeight ? '100%' : getValueWithUnit(props.height)};
  align-self: ${props => getStyledValue(props.alignSelf)};
  
  /* Flex properties */
  flex-direction: ${props => getStyledValue(props.flexDirection)};
  flex: ${props => getStyledValue(props.flex)};
  gap: ${props => getValueWithUnit(props.gap)};
  align-items: ${props => getStyledValue(props.alignItems)};
  justify-content: ${props => getStyledValue(props.justifyContent)};
  
  /* Float and shape */
  float: ${props => getStyledValue(props.float)};
  shape-outside: ${props => getStyledValue(props.shapeOutside)};
  
  /* Aspect ratio */
  aspect-ratio: ${props => {
    if (props.aspectRatio === true) return '1/1';
    return getStyledValue(props.aspectRatio);
  }};
  
  /* Visual styles */
  background-color: ${props => {
    if (props.$debug && props.$debugBGColor) return props.$debugBGColor;
    return getStyledValue(props.backgroundColor || props.bgColor);
  }};
  background: ${props => getStyledValue(props.background)};
  background-image: ${props => getStyledValue(props.backgroundImage)};
  background-position: ${props => getStyledValue(props.backgroundPosition)};
  background-repeat: ${props => getStyledValue(props.backgroundRepeat)};
  background-size: ${props => getStyledValue(props.backgroundSize)};
  border-radius: ${props => getValueWithUnit(props.borderRadius)};
  cursor: ${props => getStyledValue(props.cursor)};
  pointer-events: ${props => getStyledValue(props.pointerEvents)};
  
  /* Clip-path support */
  ${props => props.clipPath && css`
    clip-path: ${props.clipPath};
  `}
  ${props => props.clipPath && css`
    -webkit-clip-path: ${props.clipPath};
  `}

  /* Mask support */
  ${props => props.maskImage && css`
    mask-image: ${props.maskImage};
    -webkit-mask-image: ${props.maskImage};
  `}
  ${props => props.maskSize && css`
    mask-size: ${props.maskSize};
    -webkit-mask-size: ${props.maskSize};
  `}
  ${props => props.maskRepeat && css`
    mask-repeat: ${props.maskRepeat};
    -webkit-mask-repeat: ${props.maskRepeat};
  `}
  ${props => props.maskPosition && css`
    mask-position: ${props.maskPosition};
    -webkit-mask-position: ${props.maskPosition};
  `}
  
  /* Border properties */
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
  border-top: ${props => getStyledValue(props.borderTop)};
  border-right: ${props => getStyledValue(props.borderRight)};
  border-bottom: ${props => getStyledValue(props.borderBottom)};
  border-left: ${props => getStyledValue(props.borderLeft)};

  box-shadow: ${props => getStyledValue(props.boxShadow)};
  opacity: ${props => getStyledValue(props.opacity)};
  filter: ${props => getStyledValue(props.filter)};
  backdrop-filter: ${props => getStyledValue(props.backdropFilter)};
  
  /* Typography */
  color: ${props => getStyledValue(props.color)};
  font-size: ${props => getValueWithUnit(props.fontSize)};
  font-weight: ${props => getStyledValue(props.fontWeight)};
  font-family: ${props => getStyledValue(props.fontFamily)};
  text-align: ${props => getStyledValue(props.textAlign)};
  ${props => props.textWrap && css`
    text-wrap: ${props.textWrap};
    -webkit-text-wrap: ${props.textWrap};
  `}
  text-transform: ${props => getStyledValue(props.textTransform)};
  letter-spacing: ${props => getStyledValue(props.letterSpacing)};
  line-height: ${props => getStyledValue(props.lineHeight)};
  text-shadow: ${props => getStyledValue(props.textShadow)};
  hyphens: ${props => getStyledValue(props.hyphens)};
  user-select: ${props => getStyledValue(props.userSelect)};
  white-space: ${props => getStyledValue(props.whiteSpace)};
  ${props => props.textStroke && css`
    -webkit-text-stroke: ${props.textStroke};
    text-stroke: ${props.textStroke};
  `}
  
  /* Hover states */
  &:hover {
    background-color: ${props => getStyledValue(props.hoverBackgroundColor)};
    color: ${props => getStyledValue(props.hoverColor)};
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
    box-shadow: ${props => getStyledValue(props.hoverBoxShadow)};
    backdrop-filter: ${props => getStyledValue(props.hoverBackdropFilter)};
  }

  /* Focus state */
  &:focus {
    outline: ${props => getStyledValue(props.focusOutline)};
    outline-offset: ${props => getValueWithUnit(props.focusOutlineOffset)};
    border-color: ${props => getStyledValue(props.focusBorderColor)};
    box-shadow: ${props => getStyledValue(props.focusBoxShadow)};
  }
  
  /* Active states */
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

  &::selection {
    color: ${props => getStyledValue(props.selectionTextColor)};
    background-color: ${props => getStyledValue(props.selectionBackgroundColor)};
    -webkit-tap-highlight-color: ${props => getStyledValue(props.selectionBackgroundColor)};
    -webkit-text-fill-color: ${props => getStyledValue(props.selectionBackgroundColor)};
  }
  
  /* Scrollbar Styling */
  scrollbar-gutter: ${props => getStyledValue(props.scrollbarGutter)};

  @supports not (-moz-appearance: none) {
    &::-webkit-scrollbar {
      width: ${props => getValueWithUnit(props.scrollbarWidth)};
      height: ${props => getValueWithUnit(props.scrollbarHeight)};
    }

    &::-webkit-scrollbar-track {
      background: ${props => getStyledValue(props.scrollbarTrackBackground)};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => getStyledValue(props.scrollbarThumbBackgroundColor)};
      background: ${props => getStyledValue(props.scrollbarThumbBackground)};
      border-radius: ${props => getValueWithUnit(props.scrollbarThumbBorderRadius)};
      border: ${props => getStyledValue(props.scrollbarThumbBorder)};
      background-clip: ${props => getStyledValue(props.scrollbarThumbBackgroundClip)};
      
      &:hover {
        background: ${props => getStyledValue(props.scrollbarThumbHoverBackground)};
        background-color: ${props => getStyledValue(props.scrollbarThumbHoverBackgroundColor)};
      }
      
      &:active {
        background: ${props => getStyledValue(props.scrollbarThumbActiveBackground)};
        background-color: ${props => getStyledValue(props.scrollbarThumbActiveBackgroundColor)};
      }
    }
  }
        
  @supports (-moz-appearance: none) {
    scrollbar-color: ${props => getStyledValue(props.scrollbarColor)};
  }

  /* Animations and transforms */
  animation: ${props => getStyledValue(props.animation)};
  transition: ${props => getStyledValue(props.transition)};
  transform: ${props => getStyledValue(props.transform)};
  transform-origin: ${props => getStyledValue(props.transformOrigin)};
`;
