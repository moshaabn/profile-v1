// Theme configuration for the portfolio
// Change these colors to customize the entire website's appearance

export const theme = {
  colors: {
    // Primary Colors - Modern Professional Palette
    primary: {
      dark: '#0F172A',      // Slate 900 - main background dark
      medium: '#1E293B',    // Slate 800 - cards, buttons
      light: '#10B981',     // Emerald 500 - accent text, borders
      lightest: '#F1F5F9',  // Slate 100 - main text, highlights
    },
    
    // Semantic Colors (derived from primary)
    background: {
      main: '#0F172A',
      secondary: '#1E293B',
      card: '#1E293B',
      overlay: 'rgba(30, 41, 59, 0.8)', // slate 800 with opacity
    },
    
    text: {
      primary: '#F1F5F9',
      secondary: '#10B981',
      accent: '#10B981',
      muted: '#94A3B8',
    },
    
    border: {
      primary: '#10B981',
      secondary: '#334155',
    },
    
    button: {
      primary: {
        background: '#10B981',
        hover: '#059669',
        text: '#FFFFFF',
      },
      secondary: {
        background: 'transparent',
        border: '#10B981',
        text: '#10B981',
        hover: {
          background: '#10B981',
          text: '#FFFFFF',
        },
      },
    },
    
    nav: {
      text: '#F1F5F9',
      hover: '#10B981',
    },
    
    gradient: {
      hero: 'linear-gradient(135deg, #0F172A, #1E293B)',
      text: 'linear-gradient(135deg, #10B981, #F1F5F9)',
    },
  },
  
  // Spacing and sizing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  
  // Border radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
} as const;

// Helper function to get theme colors
export const getThemeColor = (path: string): string => {
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

// CSS variables for use in Tailwind
export const cssVariables = {
  '--color-primary-dark': theme.colors.primary.dark,
  '--color-primary-medium': theme.colors.primary.medium,
  '--color-primary-light': theme.colors.primary.light,
  '--color-primary-lightest': theme.colors.primary.lightest,
  '--color-background-main': theme.colors.background.main,
  '--color-background-secondary': theme.colors.background.secondary,
  '--color-background-card': theme.colors.background.card,
  '--color-text-primary': theme.colors.text.primary,
  '--color-text-secondary': theme.colors.text.secondary,
  '--color-border-primary': theme.colors.border.primary,
  '--color-button-primary-bg': theme.colors.button.primary.background,
  '--color-button-primary-hover': theme.colors.button.primary.hover,
  '--color-nav-text': theme.colors.nav.text,
  '--color-nav-hover': theme.colors.nav.hover,
};

export default theme;
