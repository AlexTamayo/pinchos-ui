import { FormProps } from './Form.types';
import { getValueWithUnit, getStyledValue } from '@/utils';
import { CommonComponentProps, commonStyledProps } from '@/types';
import { THEME_TRANSITION_TIME, DEFAULT_TRANSITION_TIME } from '@/styles/constants';

import styled, { css } from 'styled-components';

// Internal state props that shouldn't be forwarded to DOM
interface StyledFormInternalProps {
  $isThemeTransition?: boolean;
  $debug?: boolean;
  $debugBGColor?: string;
}

// Combined props interface
interface StyledFormProps extends StyledFormInternalProps, Omit<FormProps, keyof CommonComponentProps>, CommonComponentProps {}

// Props that shouldn't be forwarded to DOM
const internalProps = new Set([
  // Internal state props
  '$isThemeTransition',
  '$debug',
  '$debugBGColor',
  ...commonStyledProps,

  // Title props
  'showTitle',
  'title',
  'titleAlign',
  'titlePadding',
  'titleFontFamily',
  'titleFontSize',
  'titleFontWeight',
  'titleColor',

  // Description props
  'showDescription',
  'description',
  'descriptionAlign',
  'descriptionPadding',
  'descriptionMargin',
  'descriptionFontFamily',
  'descriptionFontSize',
  'descriptionFontWeight',
  'descriptionColor',

  // Status message props
  'statusMessageColor',
  'statusMessageFontSize',
  'statusMessageFontWeight',
  'statusMessageFontFamily',
  'statusMessagePadding',
  'statusMessageMargin',
]);

// Props that should be forwarded to DOM
const forwardProps = new Set([
  'onSubmit',
  'onChange',
  'onFocus',
  'onBlur',
  'disabled',
  'readOnly',
  'required',
  'aria-label',
  'aria-describedby',
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

export const StyledForm = styled.form.withConfig({
  shouldForwardProp,
})<StyledFormProps>`
  /* Base styles */
  position: ${props => getStyledValue(props.position) || 'relative'};
  display: ${props => getStyledValue(props.display) || 'flex'};
  flex-direction: column;
  box-sizing: ${props => getStyledValue(props.boxSizing) || 'border-box'};
  
  /* Layout & Sizing */
  width: ${props => props.fullWidth ? '100%' : getValueWithUnit(props.width)};
  height: ${props => props.fullHeight ? '100%' : getValueWithUnit(props.height)};
  min-width: ${props => getValueWithUnit(props.minWidth)};
  min-height: ${props => getValueWithUnit(props.minHeight)};
  max-width: ${props => getValueWithUnit(props.maxWidth)};
  max-height: ${props => getValueWithUnit(props.maxHeight)};
  padding: ${props => getValueWithUnit(props.padding)};
  margin: ${props => getValueWithUnit(props.margin)};
  align-self: ${props => getStyledValue(props.alignSelf)};
  
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
  
  /* Flex alignment */
  justify-content: ${props => getStyledValue(props.justifyContent) || 'center'};
  align-items: ${props => getStyledValue(props.alignItems) || 'center'};
  gap: ${props => getValueWithUnit(props.gap)};
  
  /* Visual styles */
  background-color: ${props => {
    if (props.$debug && props.$debugBGColor) return props.$debugBGColor;
    return getStyledValue(props.backgroundColor || props.bgColor);
  }};
  background: ${props => getStyledValue(props.background)};
  background-image: ${props => getStyledValue(props.backgroundImage)};
  border-radius: ${props => getValueWithUnit(props.borderRadius)};
  box-shadow: ${props => getStyledValue(props.boxShadow)};
  opacity: ${props => getStyledValue(props.opacity)};
  backdrop-filter: ${props => getStyledValue(props.backdropFilter)};
  cursor: ${props => getStyledValue(props.cursor)};
  
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
  
  /* Typography */
  color: ${props => getStyledValue(props.color)};
  font-size: ${props => getValueWithUnit(props.fontSize)};
  font-weight: ${props => getStyledValue(props.fontWeight)};
  font-family: ${props => getStyledValue(props.fontFamily)};
  text-align: ${props => getStyledValue(props.textAlign)};
  text-transform: ${props => getStyledValue(props.textTransform)};
  letter-spacing: ${props => getStyledValue(props.letterSpacing)};
  line-height: ${props => getStyledValue(props.lineHeight)};
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
  }
  
  /* Active states */
  &:active {
    background-color: ${props => getStyledValue(props.activeBackgroundColor)};
    color: ${props => getStyledValue(props.activeColor)};
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
    box-shadow: ${props => getStyledValue(props.activeBoxShadow)};
  }
  
  /* Animations and transforms */
  animation: ${props => getStyledValue(props.animation)};
  transition: ${props => getStyledValue(props.transition)};
  transform: ${props => getStyledValue(props.transform)};
  transform-origin: ${props => getStyledValue(props.transformOrigin)};
  
  /* Base transitions */
  transition:
    background-color ${props => props.transition || DEFAULT_TRANSITION_TIME},
    border-color ${props => props.transition || DEFAULT_TRANSITION_TIME},
    color ${props => props.transition || DEFAULT_TRANSITION_TIME},
    opacity ${props => props.transition || DEFAULT_TRANSITION_TIME},
    transform ${props => props.transition || DEFAULT_TRANSITION_TIME},
    transform-origin ${props => props.transition || DEFAULT_TRANSITION_TIME},
    box-shadow ${props => props.transition || DEFAULT_TRANSITION_TIME},
    border-radius ${props => props.transition || DEFAULT_TRANSITION_TIME};

  /* Theme transition */
  ${props => props.$isThemeTransition && css`
    &:not(:hover) {
      transition:
        background-color ${THEME_TRANSITION_TIME},
        border-color ${THEME_TRANSITION_TIME},
        color ${THEME_TRANSITION_TIME};
    }
  `}

  /* Title styles */
  .form-title {
    width: 100%;
    box-sizing: border-box;
    padding: ${props => getValueWithUnit(props.titlePadding)};
    font-family: ${props => getStyledValue(props.titleFontFamily)};
    font-size: ${props => getValueWithUnit(props.titleFontSize)};
    font-weight: ${props => getStyledValue(props.titleFontWeight)};
    color: ${props => getStyledValue(props.titleColor)};
    text-align: ${props => props.titleAlign || 'left'};
  }

  /* Description styles */
  .form-description {
    width: 100%;
    box-sizing: border-box;
    padding: ${props => getValueWithUnit(props.descriptionPadding)};
    margin: ${props => getValueWithUnit(props.descriptionMargin) || '0px'};
    font-family: ${props => getStyledValue(props.descriptionFontFamily)};
    font-size: ${props => getValueWithUnit(props.descriptionFontSize)};
    font-weight: ${props => getStyledValue(props.descriptionFontWeight)};
    color: ${props => getStyledValue(props.descriptionColor)};
    text-align: ${props => props.descriptionAlign || 'left'};
  }

  /* Status message styles */
  .form-status {
    
    color: ${props => getStyledValue(props.statusMessageColor)};
    font-size: ${props => getValueWithUnit(props.statusMessageFontSize)};
    font-weight: ${props => getStyledValue(props.statusMessageFontWeight)};
    font-family: ${props => getStyledValue(props.statusMessageFontFamily)};
    padding: ${props => getValueWithUnit(props.statusMessagePadding)};
    margin: ${props => getValueWithUnit(props.statusMessageMargin)};
  }
`; 