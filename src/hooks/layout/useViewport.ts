import { useViewportHeight, useViewportWidth } from "@/hooks";

export const BREAKPOINTS = {
    MESSAGE_HEIGHT: 900,
    CENTER_ELEMENT_HEIGHT: 1020,
    MOBILE_WIDTH: 1025,
} as const;


export const useLayoutBreakpoints = () => {
    const messageHeightBreak       = useViewportHeight(BREAKPOINTS.MESSAGE_HEIGHT, "greaterThan");
    const centerElementHeightBreak = useViewportHeight(BREAKPOINTS.CENTER_ELEMENT_HEIGHT, "greaterThan");
    const enterMobileMode          = useViewportWidth(BREAKPOINTS.MOBILE_WIDTH, "lessThan");
  
    return {
      messageHeightBreak,
      centerElementHeightBreak,
      enterMobileMode,
    };
};