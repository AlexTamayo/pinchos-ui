import { ReactNode } from 'react';
import {
  Display,
  Hyphens,
  TextWrap,
  Position,
  Overflow,
  TextAlign,
  AlignSelf,
  BoxSizing,
  AlignItems,
  TextTransform,
  JustifyContent,
} from './cssTypes';

export interface StyleProps {
  debug?: boolean;
  debugBGColor?: string;
  className?: string;
  
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
  fullHeight?: boolean;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  padding?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  position?: Position;
  display?: Display;
  scrollbarColor?: string;
  scrollbarGutter?: string;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  boxSizing?: BoxSizing;
  background?: string;
  backgroundColor?: string;
  bgColor?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  borderRadius?: string | number;
  borderWidth?: string | number;
  borderStyle?: string;
  borderColor?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  boxShadow?: string;
  opacity?: number;
  backdropFilter?: string;
  filter?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: number | string;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  textAlign?: TextAlign;
  textWrap?: TextWrap;
  textTransform?: TextTransform;
  whiteSpace?: string;
  hyphens?: Hyphens;
  userSelect?: 'none' | 'text' | 'all' | 'auto';
  textStroke?: string;
  textShadow?: string;
  transition?: string;
  transform?: string;
  animation?: string;
  flex?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  gap?: string | number;
  aspectRatio?: string | boolean;
  top?: string | number;
  right?: string | number;
  left?: string | number;
  bottom?: string | number;
  zIndex?: number;
  cursor?: string;
  pointerEvents?: string;
  clipPath?: string;
  maskImage?: string;
  maskSize?: string;
  maskRepeat?: string;
  maskPosition?: string;
  transformOrigin?: string;
  outline?: string;
}

export interface NewBaseProps extends StyleProps {
  children?: ReactNode;
  hover?: StyleProps;
  active?: StyleProps;
  focus?: StyleProps;
} 