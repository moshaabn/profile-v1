import { theme } from './theme';

// CSS class names that use CSS custom properties
export const tw = {
  // Background colors
  bg: {
    main: 'bg-theme-main',
    secondary: 'bg-theme-secondary', 
    card: 'bg-theme-card',
    overlay: 'bg-theme-overlay',
  },
  
  // Text colors
  text: {
    primary: 'text-theme-primary',
    secondary: 'text-theme-secondary',
    accent: 'text-theme-accent',
    muted: 'text-theme-muted',
  },
  
  // Border colors
  border: {
    primary: 'border-theme-primary',
    secondary: 'border-theme-secondary',
  },
  
  // Button styles
  button: {
    primary: 'bg-theme-button-primary text-theme-button-primary-text hover:bg-theme-button-primary-hover transition-all duration-300 ease-in-out',
    secondary: 'border border-theme-button-secondary text-theme-button-secondary hover:bg-theme-button-secondary hover:text-theme-button-secondary-hover transition-all duration-300 ease-in-out',
  },
  
  // Navigation styles
  nav: {
    link: 'text-theme-nav hover:text-theme-nav-hover transition-all duration-300 ease-in-out',
  },
  
  // Gradients
  gradient: {
    hero: 'bg-gradient-to-br from-[#0F172A] to-[#1E293B]',
    text: 'gradient-text',
  },
};

// Function to get a specific color
export const getColor = (path: string): string => {
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

// Function to generate custom Tailwind class
export const customColor = (property: 'bg' | 'text' | 'border', colorPath: string): string => {
  const color = getColor(colorPath);
  return `${property}-[${color}]`;
};

// Export utilities
const themeUtils = { tw, getColor, customColor };
export default themeUtils;
