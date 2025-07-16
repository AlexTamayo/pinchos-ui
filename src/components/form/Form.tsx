import { forwardRef } from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { StyledForm } from './Form.styles';
import { useForm, FormProvider } from 'react-hook-form';

import type { FormProps } from './Form.types';

/**
 * Form Component
 * 
 * A versatile form wrapper component that provides form functionality
 * with customizable title and description sections.
 * 
 * @example
 * ```tsx
 * <Form
 *   onSubmit={handleSubmit}
 *   showTitle
 *   title="Contact Form"
 *   titleAlign="center"
 * >
 *   <FormField name="email" label="Email" />
 * </Form>
 * ```
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(({
  // Core form props
  onSubmit,
  children,
  showTitle = false,
  title,
  showDescription = false,
  description,
  debug,
  debugBGColor,
  ...rest
}, ref) => {
  const { isThemeTransition } = useSelector((state: RootState) => state.theme);

  const methods = useForm();

  const handleSubmit = async (data: /* eslint-disable-line @typescript-eslint/no-explicit-any */ any) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledForm
        ref={ref}
        onSubmit={methods.handleSubmit(handleSubmit)}
        $isThemeTransition={isThemeTransition}
        $debug={debug}
        $debugBGColor={debugBGColor}
        {...rest}
      >
        {showTitle && title && (
          <div className="form-title" role="heading" aria-level={1}>
            {title}
          </div>
        )}
        
        {showDescription && description && (
          <p className="form-description">
            {description}
          </p>
        )}

        {children}

        <div className="form-status" />
      </StyledForm>
    </FormProvider>
  );
});

Form.displayName = 'Form'; 