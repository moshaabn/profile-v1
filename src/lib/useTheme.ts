import { theme } from './theme';

// Custom hook to use theme colors
export const useTheme = () => {
  const getColor = (path: string): string => {
    const keys = path.split('.');
    let current: unknown = theme.colors;
    
    for (const key of keys) {
      if (typeof current === 'object' && current !== null && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        throw new Error(`Theme color path "${path}" not found`);
      }
    }
    
    if (typeof current !== 'string') {
      throw new Error(`Theme color path "${path}" does not resolve to a string`);
    }
    
    return current;
  };

  return {
    colors: theme.colors,
    spacing: theme.spacing,
    borderRadius: theme.borderRadius,
    shadows: theme.shadows,
    transitions: theme.transitions,
    getColor,
  };
};

export default useTheme;
