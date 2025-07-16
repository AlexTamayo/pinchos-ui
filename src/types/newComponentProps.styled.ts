// Explicitly list all props that shouldn't be forwarded to DOM
export const newCommonStyledProps = new Set([
  // Base Props
  // 'children',
  // 'hover',
  // 'active',
  // 'focus',

  // Debug Options
  'debug',
  'debugBGColor',

  // Layout & Sizing
  'fullWidth',
  'fullHeight',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'width',
  'height',
  'padding',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'alignSelf',
  'gap',
  'flexDirection',
  'flex',
  'aspectRatio',

  // Display & Position
  'position',
  'display',
  'alignItems',
  'justifyContent',
  'overflow',
  'overflowX',
  'overflowY',
  'boxSizing',

  // Visual Style
  'backgroundColor',
  'bgColor',
  'background',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'borderRadius',
  'borderWidth',
  'borderStyle',
  'borderColor',
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'boxShadow',
  'opacity',
  'filter',
  'backdropFilter',

  // Typography
  'color',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'textAlign',
  'letterSpacing',
  'lineHeight',
  'textWrap',
  'textTransform',
  'textStroke',
  'textShadow',
  'userSelect',
  'whiteSpace',
  'hyphens',

  // Transitions & Animations
  'transition',
  'transform',
  'transformOrigin',
  'animation',
  'isThemeTransition',

  // Positioning
  'top',
  'right',
  'bottom',
  'left',
  'zIndex',

  // Other
  'cursor',
  'pointerEvents',
  'clipPath',
  'maskImage',
  'maskSize',
  'maskRepeat',
  'maskPosition'
]);

// Props that should be forwarded to DOM
export const forwardProps = new Set([
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

// Helper function to check if a prop should be forwarded
export const shouldForwardProp = (prop: string): boolean => {
  console.log(`Checking prop: ${prop}`);
  console.log(`In forwardProps: ${forwardProps.has(prop)}`);
  console.log(`In newCommonStyledProps: ${newCommonStyledProps.has(prop)}`);
  
  // Always forward props in forwardProps set
  if (forwardProps.has(prop)) return true;
  // Never forward props in newCommonStyledProps set
  if (newCommonStyledProps.has(prop)) return false;
  // Forward all other props
  return true;
}; 