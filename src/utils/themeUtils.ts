export const getPrehydratedTheme = () => {
    if (typeof window === 'undefined') return false;
    try {
        const persistedState = JSON.parse(localStorage.getItem('persist:theme') || '{}');
        return JSON.parse(persistedState.isDark || 'false');
    } catch {
        return false;
    }
}; 