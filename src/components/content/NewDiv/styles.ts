import styled, { css } from 'styled-components';
import { getValueWithUnit } from '@/utils';
import { NewDivProps } from './types';
import { newCommonStyledProps } from '@/types/newComponentProps.styled';

// Helper to convert camelCase to kebab-case
const toKebabCase = (str: string) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

// Props that shouldn't be forwarded to DOM
const internalProps = new Set([
  ...newCommonStyledProps,
]);

// shouldForwardProp function
const shouldForwardProp = (prop: string): boolean => !internalProps.has(prop);

export const StyledNewDiv = styled.div.withConfig({
  shouldForwardProp,
})<NewDivProps>`
  // Base styles
  ${props => Object.entries(props)
    .filter(([key, value]) => value !== undefined && internalProps.has(key))
    .map(([key, value]) => {
      if (typeof value === 'number' && ['width', 'height', 'padding', 'margin', 'borderRadius', 'fontSize'].includes(key)) {
        return `${toKebabCase(key)}: ${getValueWithUnit(value)};`;
      }
      return `${toKebabCase(key)}: ${value};`;
    })
    .join('\n')
  }

  // Pseudo-states using the test implementation's pattern
  ${props => props.hover && css`
    &:hover {
      ${Object.entries(props.hover).map(([key, value]) => `
        ${toKebabCase(key)}: ${value};
      `).join('')}
    }
  `}

  ${props => props.active && css`
    &:active {
      ${Object.entries(props.active).map(([key, value]) => `
        ${toKebabCase(key)}: ${value};
      `).join('')}
    }
  `}

  ${props => props.focus && css`
    &:focus {
      ${Object.entries(props.focus).map(([key, value]) => `
        ${toKebabCase(key)}: ${value};
      `).join('')}
    }
  `}
`; 