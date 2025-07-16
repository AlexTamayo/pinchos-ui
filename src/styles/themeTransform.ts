import type { Theme } from "./theme";
import type { ThemeGradient } from "@/components/local/CurvedBackground"

type ThemeValue = string | number | Record<string, any>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isLightDarkPair(obj: any): obj is { light: string; dark: string } {
    return obj
        && typeof obj === 'object'
        && 'light' in obj
        && 'dark' in obj
        && Object.keys(obj).length === 2;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isThemeGradient(obj: any): obj is ThemeGradient {
  return obj
      && typeof obj === 'object'
      && 'start' in obj
      && 'end' in obj;
}

type CollapseTheme<T> =
  T extends { light: infer L; dark: infer D }
    // If both sides are ThemeGradient keep the gradient,
    // otherwise collapse to a string.
    ? L extends ThemeGradient
      ? D extends ThemeGradient
        ? ThemeGradient
        : string
      : string
    : T extends ThemeGradient
      ? T
      : T extends Record<string, any>
        ? { [K in keyof T]: CollapseTheme<T[K]> }
        : T;


// Derive the CollapsedTheme type from the Theme type
export type CollapsedTheme = CollapseTheme<Theme>;

export function collapseTheme(themeObj: Theme, isDark: boolean): CollapsedTheme {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const collapse = (obj: Record<string, ThemeValue>): any => {
        const result: Record<string, any> = {};

        for (const [key, value] of Object.entries(obj)) {
            // if it's a light/dark pair containing a gradient
            if (isLightDarkPair(value) && isThemeGradient(value[isDark ? 'dark' : 'light'])) {
                result[key] = value[isDark ? 'dark' : 'light'];
            }
            // if it's a regular light/dark pair
            else if (isLightDarkPair(value)) {
                result[key] = isDark ? value.dark : value.light;
            }
            // If it's a gradient, preserve its structure
            else if (isThemeGradient(value)) {
                result[key] = value;
            }
            // If it's an object but not a light/dark pair or gradient, recurse
            else if (typeof value === 'object' && value !== null) {
                result[key] = collapse(value as Record<string, ThemeValue>);
            }
            // Otherwise keep the value as is
            else {
                result[key] = value;
            }
        }

        return result;
    };

    return collapse(themeObj) as CollapsedTheme;
}

