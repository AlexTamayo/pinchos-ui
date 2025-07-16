import styled, { css } from 'styled-components';
import { FormFieldProps } from './FormField.types';
import { THEME_TRANSITION_TIME } from '@/styles/constants';
import { getValueWithUnit, getStyledValue } from '@/utils';
import { CommonComponentProps, commonStyledProps } from '@/types';

// Internal state props that shouldn't be forwarded to DOM
interface StyledFormFieldInternalProps {
  $isThemeTransition?: boolean;
  $debug?: boolean;
  $debugBGColor?: string;
  $isTextArea?: boolean;
  $showLabel?: boolean;
  $labelAlign?: 'left' | 'center' | 'right';
  $hasError?: boolean;
}

// Combined props interface - omitting name and register as they're handled by the input element
interface StyledFormFieldProps extends StyledFormFieldInternalProps, Omit<FormFieldProps, 'name' | 'register' | keyof CommonComponentProps>, CommonComponentProps {}

// Props that shouldn't be forwarded to DOM
const internalProps = new Set([
  // Internal state props
  '$isThemeTransition',
  '$debug',
  '$debugBGColor',
  '$isTextArea',
  '$showLabel',
  '$labelAlign',
  '$hasError',

  // Form Field specific props
  'labelMarginBottom',
  'labelFontSize',
  'labelFontWeight',
  'labelColor',
  'labelPadding',
  'inputPadding',
  'inputBorder',
  'inputBorderRadius',
  'inputFontSize',
  'inputMinHeight',
  'inputHeight',
  'inputResize',
  'inputBackgroundColor',
  'inputSelectionTextColor',
  'inputSelectionBackgroundColor',
  'caretColor',
  'userSelect',
  'disabledOpacity',
  'disabledBackgroundColor',
  'disabledBorderColor',
  'disabledColor',
  'errorBorder',
  'errorColor',
  'errorFontSize',
  'errorMarginTop',
  'errorMinHeight',
  'errorPadding',
  'inputFontWeight',
  'placeholderFontWeight',
  'errorFontWeight',
  'labelFontFamily',
  'inputFontFamily',
  'inputColor',
  'placeholderFontFamily',
  'placeholderFontSize',
  'placeholderColor',
  'errorFontFamily',
  'tabIndex',
  ...commonStyledProps,
]);

// Props that should be forwarded to DOM
const forwardProps = new Set([
  'onChange',
  'onFocus',
  'onBlur',
  'placeholder',
  'disabled',
  'readOnly',
  'required',
  'aria-label',
  'aria-describedby',
  'tabIndex',
  'role',
  'id',
  'name',
  'type',
  'value',
  'defaultValue',
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

export const StyledFormField = styled.div.withConfig({
  shouldForwardProp,
})<StyledFormFieldProps>`
  /* Base styles */
  position: ${props => getStyledValue(props.position) || 'relative'};
  display: ${props => getStyledValue(props.display) || 'flex'};
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : getValueWithUnit(props.width)};
  height: ${props => props.fullHeight ? '100%' : getValueWithUnit(props.height)};
  margin-bottom: ${props => getValueWithUnit(props.marginBottom)};
  background-color: ${props => {
    if (props.$debug && props.$debugBGColor) return props.$debugBGColor;
    return getStyledValue(props.backgroundColor || props.bgColor);
  }};
  box-sizing: border-box;

  /* Label styles */
  .form-label {
    margin-bottom: ${props => getValueWithUnit(props.labelMarginBottom)};
    padding: ${props => getValueWithUnit(props.labelPadding)};
    font-size: ${props => getValueWithUnit(props.labelFontSize)};
    font-weight: ${props => getStyledValue(props.labelFontWeight)};
    font-family: ${props => getStyledValue(props.labelFontFamily)};
    text-align: ${props => props.$labelAlign || 'left'};
    color: ${props => getStyledValue(props.labelColor) || getStyledValue(props.color)};
    ${props => props.$isThemeTransition && css`
      transition: color ${THEME_TRANSITION_TIME};
    `}
  }

  /* Input/Textarea styles */
  .form-input {
    width: 100%;
    padding: ${props => getValueWithUnit(props.inputPadding)};
    border: ${props => {
      if (props.$hasError && props.errorBorder) return getStyledValue(props.errorBorder);
      return getStyledValue(props.inputBorder);
    }};
    border-radius: ${props => getValueWithUnit(props.inputBorderRadius)};
    font-size: ${props => getValueWithUnit(props.inputFontSize)};
    font-weight: ${props => getStyledValue(props.inputFontWeight)};
    font-family: ${props => getStyledValue(props.inputFontFamily)};
    text-align: ${props => props.$labelAlign || 'left'};
    background-color: ${props => getStyledValue(props.inputBackgroundColor) || getStyledValue(props.backgroundColor || props.bgColor)};
    color: ${props => getStyledValue(props.inputColor) || getStyledValue(props.color)};
    box-sizing: border-box;
    ${props => props.$isTextArea && props.inputMinHeight && css`
      min-height: ${getValueWithUnit(props.inputMinHeight)};
    `}
    ${props => props.$isTextArea && props.inputHeight && css`
      height: ${getValueWithUnit(props.inputHeight)};
    `}
    resize: ${props => props.$isTextArea ? (props.inputResize || 'vertical') : 'none'};
    caret-color: ${props => {
      if (props.caretColor) return getStyledValue(props.caretColor);
      return getStyledValue(props.inputColor) || getStyledValue(props.color) || 'auto';
    }} !important;
    user-select: ${props => getStyledValue(props.userSelect) || 'text'};

    &::placeholder {
      font-family: ${props => getStyledValue(props.placeholderFontFamily) || getStyledValue(props.inputFontFamily)};
      font-size: ${props => getValueWithUnit(props.placeholderFontSize) || getValueWithUnit(props.inputFontSize)};
      font-weight: ${props => getStyledValue(props.placeholderFontWeight) || getStyledValue(props.inputFontWeight)};
      text-align: ${props => getStyledValue(props.$labelAlign) || 'left'};
      color: ${props => getStyledValue(props.placeholderColor)};
      caret-color: inherit;
      ${props => props.$isThemeTransition && css`
        transition: color ${THEME_TRANSITION_TIME};
      `}
    }

    &::selection {
        background-color: ${props => getStyledValue(props.inputSelectionBackgroundColor)};
        -webkit-tap-highlight-color: ${props => getStyledValue(props.inputSelectionBackgroundColor)};
        -webkit-text-fill-color: ${props => getStyledValue(props.inputSelectionBackgroundColor)};
        color: ${props => getStyledValue(props.inputSelectionTextColor)};
    }
    
    /* Focus state */
    &:focus {
      outline: ${props => getStyledValue(props.focusOutline)};
      outline-offset: ${props => getValueWithUnit(props.focusOutlineOffset)};
      border-color: ${props => getStyledValue(props.focusBorderColor)};
      box-shadow: ${props => getStyledValue(props.focusBoxShadow)};
    }

    /* Hover state */
    &:hover:not(:disabled) {
      border-color: ${props => getStyledValue(props.hoverBorderColor)};
      background-color: ${props => getStyledValue(props.hoverBackgroundColor)};
      color: ${props => getStyledValue(props.hoverColor)};
      box-shadow: ${props => getStyledValue(props.hoverBoxShadow)};
      border: ${props => getStyledValue(props.hoverBorder)};
      border-width: ${props => getValueWithUnit(props.hoverBorderWidth)};
      border-style: ${props => getStyledValue(props.hoverBorderStyle)};
      border-radius: ${props => getValueWithUnit(props.hoverBorderRadius)};
    }

    /* Disabled state */
    &:disabled {
      opacity: ${props => props.disabledOpacity || 0.65};
      cursor: not-allowed;
      background-color: ${props => getStyledValue(props.disabledBackgroundColor) || '#f8f9fa'};
      border-color: ${props => getStyledValue(props.disabledBorderColor) || '#dee2e6'};
      color: ${props => getStyledValue(props.disabledColor) || '#6c757d'};
    }

    /* Theme transition */
    ${props => props.$isThemeTransition && css`
      transition:
        background-color ${THEME_TRANSITION_TIME},
        border-color ${THEME_TRANSITION_TIME},
        color ${THEME_TRANSITION_TIME},
        box-shadow ${THEME_TRANSITION_TIME};
    `}
  }

  /* Error message styles */
  .form-error {
    color: ${props => getStyledValue(props.errorColor) || 'red'};
    font-size: ${props => getValueWithUnit(props.errorFontSize) || '14px'};
    font-weight: ${props => getStyledValue(props.errorFontWeight) || '400'};
    font-family: ${props => getStyledValue(props.errorFontFamily)};
    margin-top: ${props => getValueWithUnit(props.errorMarginTop) || '4px'};
    padding: ${props => getValueWithUnit(props.errorPadding)};
    min-height: ${props => getValueWithUnit(props.errorMinHeight) || '20px'};
    text-align: ${props => getStyledValue(props.$labelAlign) || 'left'};
    ${props => props.$isThemeTransition && css`
      transition: color ${THEME_TRANSITION_TIME};
    `}
  }
`; 