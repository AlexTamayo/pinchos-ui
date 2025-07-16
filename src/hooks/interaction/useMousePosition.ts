import { debugLog, formatDecimal } from "@/utils";
import { useState, useEffect, RefObject } from "react";


interface MousePosition {
    x: number;
    y: number;
    elementX: number;
    elementY: number;
    elementCenterX: number;
    elementCenterY: number;
}

export const useMousePosition = <T extends HTMLElement | null>(elementRef: RefObject<T>) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
        elementX: 0,
        elementY: 0,
        elementCenterX: 0,
        elementCenterY: 0,
    });

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            
            // Get position relative to viewport
            const x = e.clientX;
            const y = e.clientY;

            // Get position relative to element
            const elementX = x - rect.left;
            const elementY = y - rect.top;

            // Get position relative to element center (-1 to 1)
            const elementCenterX = (elementX / rect.width) * 2 - 1;
            const elementCenterY = (elementY / rect.height) * 2 - 1;

            setMousePosition({
                x,
                y,
                elementX,
                elementY,
                elementCenterX,
                elementCenterY,
            });
        };




        // Add mousemove and mouseleave handlers
        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, [elementRef]);

    debugLog(
        false,
        "useMousePosition",
        "\n",
        elementRef.current?.className,
        "\n",
        "X:", mousePosition.x,
        "Y:", mousePosition.y,
        "\n",
        "elementX:", formatDecimal(mousePosition.elementX),
        "elementY:", formatDecimal(mousePosition.elementY),
        "\n",
        "elementCenterX:", formatDecimal(mousePosition.elementCenterX),
        "elementCenterY:", formatDecimal(mousePosition.elementCenterY),
    )

    return mousePosition;
}