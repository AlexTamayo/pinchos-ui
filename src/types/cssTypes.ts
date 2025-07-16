/**
 * Shared CSS Type Definitions
 * 
 * This file contains common CSS-related type definitions used across
 * multiple components to ensure consistency and reduce duplication.
 */

// Layout types
export type FlexDirection = 
  | 'row' 
  | 'row-reverse' 
  | 'column' 
  | 'column-reverse';

export type JustifyContent = 
  | 'flex-start' 
  | 'flex-end' 
  | 'center' 
  | 'space-between' 
  | 'space-around' 
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline';

export type AlignItems = 
  | 'flex-start' 
  | 'flex-end' 
  | 'center' 
  | 'stretch' 
  | 'baseline' 
  | 'normal'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'safe center'
  | 'unsafe center'
  | 'first baseline'
  | 'last baseline';

export type AlignSelf = 
  | 'auto' 
  | 'flex-start' 
  | 'flex-end' 
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'normal'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'safe center'
  | 'unsafe center'
  | 'first baseline'
  | 'last baseline';

// Display and positioning types
export type Display = 
  | 'inline' 
  | 'block' 
  | 'inline-block' 
  | 'flex' 
  | 'grid' 
  | 'none'
  | 'inline-flex'
  | 'inline-grid'
  | 'table'
  | 'inline-table'
  | 'table-row'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row-group'
  | 'contents'
  | 'list-item'
  | 'run-in';

export type Position = 
  | 'static' 
  | 'relative' 
  | 'absolute' 
  | 'fixed' 
  | 'sticky';

export type Overflow = 
  | 'visible' 
  | 'hidden' 
  | 'scroll' 
  | 'auto'
  | 'clip'
  | 'overlay';

export type BoxSizing = 
  | 'border-box' 
  | 'content-box';

// Typography types
export type TextAlign = 
  | 'left' 
  | 'center' 
  | 'right' 
  | 'justify'
  | 'start'
  | 'end'
  | 'match-parent';

export type TextWrap = 
  | 'wrap' 
  | 'nowrap' 
  | 'balance' 
  | 'pretty' 
  | 'stable'
  | 'balance-all'
  | 'break-word'
  | 'break-spaces';

export type TextTransform = 
  | 'none' 
  | 'capitalize' 
  | 'uppercase' 
  | 'lowercase' 
  | 'full-width' 
  | 'full-size-kana'
  | 'math-auto';

export type Hyphens = 
  | 'none'
  | 'manual'
  | 'auto';

// Form element types
export type ButtonType = 
  | 'button' 
  | 'submit' 
  | 'reset';