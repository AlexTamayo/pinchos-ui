import { createGlobalStyle } from 'styled-components';
import { THEME_TRANSITION_TIME, DEFAULT_TRANSITION_TIME } from './constants';

const floatTranslateNumber = 5;
const floatRotateNumber = 0.5;

const scrollbarDimension = '20px';
const scrollbarBaseColor = 197;

const focusTransitionTime = '10ms';

export const GlobalStyles = createGlobalStyle`
  :root {
    --theme-transition-time: ${THEME_TRANSITION_TIME};
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  html, body, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    overflow-x: hidden;
    caret-color: transparent;
    font-family: var(--font-eras), system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
    white-space: pre-line;
  }

  body {
    transition: background-color var(--theme-transition-time),
                color var(--theme-transition-time),
                border-color var(--theme-transition-time),
                fill var(--theme-transition-time),
                stop-color var(--theme-transition-time);
  }

  .hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .custom-scrollbar {
    scrollbar-gutter: stable;

    @supports not (-moz-appearance: none) {
      &::-webkit-scrollbar {
        width: ${scrollbarDimension};
        height: ${scrollbarDimension};
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(${scrollbarBaseColor}, ${scrollbarBaseColor}, ${scrollbarBaseColor}, 0.4);
        border-radius: 15px;
        border: 5px solid transparent;
        background-clip: padding-box;

        &:hover {
          background-color: rgba(${scrollbarBaseColor}, ${scrollbarBaseColor}, ${scrollbarBaseColor}, 0.6);
        }

        &:active {
          background-color: rgba(${scrollbarBaseColor}, ${scrollbarBaseColor}, ${scrollbarBaseColor}, 0.8);
        }
      }
    }

    @supports (-moz-appearance: none) {
      scrollbar-color: rgba(${scrollbarBaseColor}, ${scrollbarBaseColor}, ${scrollbarBaseColor}, 0.5) transparent;
    }
  }

  .fade-vertical-mask {
    -webkit-mask-image: 
      linear-gradient(to top in oklab, black 96%, transparent 98%),
      linear-gradient(to bottom in oklab, black 96%, transparent 98%);
    mask-image: 
      linear-gradient(to top in oklab, black 96%, transparent 98%),
      linear-gradient(to bottom in oklab, black 96%, transparent 98%);
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
  }

  .fade-horizonal-mask {
    -webkit-mask-image: 
      linear-gradient(to right in oklab, black 95%, transparent 100%),
      linear-gradient(to left in oklab, black 95%, transparent 100%);
    mask-image: 
      linear-gradient(to right in oklab, black 95%, transparent 100%),
      linear-gradient(to left in oklab, black 95%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
  }

  .mouse-glow-effect {
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      height: calc(var(--glow-size, 75%) * 0.75);
      aspect-ratio: 1 / 1;
      background: radial-gradient(
        circle,
        rgba(255, 248, 231, 0.15) 0%,
        rgba(255, 255, 255, 0.07) 30%,
        rgba(255, 255, 255, 0.03) 50%,
        rgba(255, 255, 255, 0) 75%
      );
      border-radius: 50%;
      left: var(--mouse-x);
      top: var(--mouse-y);
      transform: translate(-50%, -50%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .focus-visible {
    &:focus-visible {
      outline-offset: 1px;
      outline-width: 3px;
      outline-color: rgba(30, 139, 255, 0.75);

      // 'none', 'hidden', 'dotted',
      // 'dashed','solid', 'double',
      // 'groove', 'ridge', 'inset', 'outset'
      outline-style: dashed;

      transition: 
        outline-offset ${focusTransitionTime},
        outline-width ${focusTransitionTime},
        outline-color ${focusTransitionTime},
        outline-style ${focusTransitionTime};
    }
  }

  @keyframes float {
    0% {
      transform: translateY(-${floatTranslateNumber}px) rotate(${floatRotateNumber}deg);
    }
    50% {
      transform: translateY(${floatTranslateNumber}px) rotate(-${floatRotateNumber}deg);
    }
    100% {
      transform: translateY(-${floatTranslateNumber}px) rotate(${floatRotateNumber}deg);
    }
  }

  @keyframes shine-keyframes {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Base transition rules */
  * {
    // transition: all var(--theme-transition-time);
    transition: all ${DEFAULT_TRANSITION_TIME};
  }

  /* Enable transition inheritance */
  * {
    transition: inherit;
  }
`;