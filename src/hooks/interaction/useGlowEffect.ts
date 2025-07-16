import { useEffect, RefObject } from "react";
import { debugLog, formatDecimal } from "@/utils";
import { useMousePosition } from "./useMousePosition";

export const useGlowEffect = <T extends HTMLElement | null>(elementRef: RefObject<T>) => {
    const { elementX, elementY } = useMousePosition(elementRef);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Get element dimensions
        const rect = element.getBoundingClientRect();
        const glowSize = Math.max(rect.width, rect.height);

        // Update CSS variables instead of trying to manipulate ::before
        debugLog(
            false,
            "useGlowEffects",
            "\n",
            element.className,
            "\n",
            "mouse-x:", formatDecimal(elementX),
            "mouse-y:", formatDecimal(elementY),
            "\n",
            "object width:", formatDecimal(rect.width),
            "object heigh:", formatDecimal(rect.height),
            "\n",
            "glow-size:", formatDecimal(glowSize),
        )

        element.style.setProperty('--mouse-x', `${elementX}px`);
        element.style.setProperty('--mouse-y', `${elementY}px`);
        element.style.setProperty('--glow-size', `${glowSize}px`);
    }, [elementRef, elementX, elementY]);
};