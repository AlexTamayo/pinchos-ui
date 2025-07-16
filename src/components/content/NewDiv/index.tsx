import { forwardRef } from 'react';
import { StyledNewDiv } from './styles';
import type { NewDivProps } from './types';

export const NewDiv = forwardRef<HTMLDivElement, NewDivProps>(({ children, ...props }, ref) => {
  return (
    <StyledNewDiv
      ref={ref}
      {...props}
    >
      {children}
    </StyledNewDiv>
  );
}); 

NewDiv.displayName = 'NewDiv';