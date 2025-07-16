/**
 * Debug Utility Functions
 * 
 * A set of utility functions for handling debug logging throughout the application.
 * Provides both local and global debug capabilities through environment variables.
 */

/**
 * **`debugLog`**
 * 
 * Logs messages to the console when debug mode is enabled.
 * 
 * @param status - Whether to log the messages
 * @param messages - Variable number of messages to log
 * 
 * @example
 * // Basic usage
 * debugLog(true, "Debug message");
 * 
 * @example
 * // Multiple messages
 * debugLog(true, "Component:", "Flex", "Props:", props);
 */
export function debugLog (status: boolean, ...messages: unknown[]) {
    if (status) {
        console.log(...messages)
    }
}

/**
 * **`GLOBAL_DEBUG`**
 * 
 * Global debug flag controlled by environment variable.
 * When true, enables debug logging across the entire application.
 * 
 * **Type**: `boolean`
 * 
 * **Default**: `false`
 * 
 * @example
 * // In .env.local
 * NEXT_PUBLIC_GLOBAL_DEBUG=true
 */
export const GLOBAL_DEBUG = process.env.NEXT_PUBLIC_GLOBAL_DEBUG === 'true';

/**
 * **`getDebugFlag`**
 * 
 * Combines global and local debug flags to determine if debug logging should be enabled.
 * Returns true if either the global debug flag or local debug flag is true.
 * 
 * @param localDebug - Local debug flag for specific components
 * @returns Combined debug status
 * 
 * @example
 * // In a component
 * const DEBUG_LOG = getDebugFlag(true);
 * debugLog(DEBUG_LOG, "Component debug message");
 */
export const getDebugFlag = (localDebug: boolean): boolean => {
    return GLOBAL_DEBUG || localDebug;
}