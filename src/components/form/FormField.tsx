import { forwardRef, useRef, useEffect } from 'react';
import { debugLog } from '@/utils';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { StyledFormField } from './FormField.styles';

import type { FormFieldProps } from './FormField.types';

/**
 * FormField Component
 * 
 * A versatile form field component that supports both input and textarea types,
 * with extensive styling options and form validation integration.
 * 
 * @example
 * // Basic usage
 * <FormField
 *   name="email"
 *   register={register}
 *   label="Email"
 * />
 * 
 * @example
 * // With validation and error handling
 * <FormField
 *   name="password"
 *   register={register}
 *   label="Password"
 *   validation={{ required: true, minLength: 8 }}
 *   error={errors.password}
 * />
 * 
 * @example
 * // As a textarea with custom styling
 * <FormField
 *   name="message"
 *   register={register}
 *   label="Message"
 *   isTextArea
 *   rows={4}
 *   fontSize="16px"
 *   borderRadius="8px"
 * />
 * 
 * @example
 * // Debug mode
 * <FormField
 *   name="debug"
 *   register={register}
 *   debug
 *   debugBGColor="rgba(255,0,0,0.1)"
 * />
 */
export const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(({
  // Core props
  name,
  register,
  className,
  inputClassName,
  id,
  style,

  // Field-specific props
  label,
  showLabel = true,
  labelAlign = 'left',
  error,
  validation = {},
  isTextArea = false,
  rows,
  inputProps = {},
  textAreaProps = {},
  placeholder,
  disabled,
  readOnly,
  tabIndex,
  defaultValue,

  // Debug props
  debug,
  debugBGColor,

  ...rest
}, ref) => {
  const DEBUG_LOG = false;
  const { isThemeTransition } = useSelector((state: RootState) => state.theme);

  debugLog(DEBUG_LOG, 'FormField - Props:', {
    name,
    label,
    isTextArea,
    error,
    debug,
    debugBGColor,
    isThemeTransition
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { ref: rhfRef, ...fieldProps } = register(name, validation);

  const inputElement = isTextArea ? (
    <textarea
      {...fieldProps}          // RHF props (minus its ref)
      {...textAreaProps}
      defaultValue={defaultValue}
      className={`form-input ${inputClassName || ''}`}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      rows={rows}
      tabIndex={tabIndex}
      ref={(el) => {
        textareaRef.current = el;        // your own ref
        rhfRef(el);                      // RHF ref
        if (typeof ref === 'function')   // forwarded ref from parent
          ref(el);
        else if (ref) (ref as React.RefObject<typeof el>).current = el;
      }}
    />
  ) : (
    <input
      {...fieldProps}
      {...inputProps}
      defaultValue={defaultValue}
      className={`form-input ${inputClassName || ''}`}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      tabIndex={tabIndex}
      ref={(el) => {
        inputRef.current = el;
        rhfRef(el);
        if (typeof ref === 'function')
          ref(el);
        else if (ref) (ref as React.RefObject<typeof el>).current = el;
      }}
    />
  );

  return (
    <StyledFormField
      className={className}
      id={id}
      style={style}
      $isTextArea={isTextArea}
      $showLabel={showLabel}
      $labelAlign={labelAlign}
      $hasError={!!error}
      $debug={debug}
      $debugBGColor={debugBGColor}
      $isThemeTransition={isThemeTransition}
      {...rest}
    >
      {showLabel && label && (
        <div className="form-label">
          {label}
        </div>
      )}
      {inputElement}
      <div className="form-error">
        {error && error.message}
      </div>
    </StyledFormField>
  );
});

FormField.displayName = 'FormField'; 