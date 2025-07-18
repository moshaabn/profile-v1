# Theme System Documentation

This portfolio uses a centralized theme system that makes it easy to change colors and styling across the entire website.

## Files Structure

```
src/lib/
├── theme.ts              # Main theme configuration
├── useTheme.ts           # React hook for theme access
├── tailwind-theme.ts     # Tailwind utility classes
└── theme-readme.md       # This documentation
```

## How to Change the Color Palette

### 1. Update the Main Theme File

Edit `src/lib/theme.ts` and modify the colors in the `primary` object:

```typescript
primary: {
  dark: '#000000',      // Pure black - main background dark
  medium: '#222222',    // Dark gray - cards, buttons  
  light: '#1DCD9F',     // Bright teal - accent text, borders
  lightest: '#169976',  // Darker teal - main text, highlights
},
```

### 2. Update CSS Variables (if needed)

If you change the main colors, also update them in `src/app/globals.css`:

```css
:root {
  --color-primary-dark: #000000;
  --color-primary-medium: #222222;
  --color-primary-light: #1DCD9F;
  --color-primary-lightest: #169976;
  /* ... other variables ... */
}
```

## Usage Examples

### Using the Theme Hook

```typescript
import { useTheme } from '@/lib/useTheme';

const MyComponent = () => {
  const theme = useTheme();
  
  return (
    <div style={{ backgroundColor: theme.colors.primary.dark }}>
      <p style={{ color: theme.colors.text.primary }}>Hello World</p>
    </div>
  );
};
```

### Using Tailwind Utilities

```typescript
import { tw } from '@/lib/tailwind-theme';

const MyComponent = () => {
  return (
    <div className={tw.bg.main}>
      <p className={tw.text.primary}>Hello World</p>
      <button className={tw.button.primary}>Click Me</button>
    </div>
  );
};
```

### Using Custom Colors

```typescript
import { customColor } from '@/lib/tailwind-theme';

const MyComponent = () => {
  return (
    <div className={customColor('bg', 'primary.dark')}>
      <p className={customColor('text', 'text.primary')}>Hello World</p>
    </div>
  );
};
```

## Current Color Palette

### Primary Colors
- **Dark**: `#000000` - Pure black for main backgrounds
- **Medium**: `#222222` - Dark gray for cards and buttons
- **Light**: `#1DCD9F` - Bright teal for accent text and borders
- **Lightest**: `#169976` - Darker teal for main text and highlights

### Usage Map
- **Background**: Pure black → dark gray gradient
- **Cards**: Dark gray background
- **Text**: Bright teal primary, darker teal secondary
- **Buttons**: Bright teal background, darker teal hover, black text
- **Borders**: Bright teal
- **Navigation**: Bright teal text, darker teal hover

## Quick Color Change Guide

To completely change the color scheme:

1. **Choose your 4 main colors** (dark, medium, light, lightest)
2. **Update `theme.ts`** with your new colors
3. **Update `globals.css`** CSS variables
4. **Test your changes** by running the development server

The theme system automatically applies your colors throughout the entire portfolio!

## Tips

- Use online color palette generators for harmonious colors
- Ensure sufficient contrast for accessibility
- Test your colors in both light and dark environments
- Consider your brand colors and industry standards
- Use the browser's developer tools to preview changes quickly

## Extending the Theme

You can add new color categories or properties to the theme:

```typescript
// In theme.ts
export const theme = {
  colors: {
    // ... existing colors
    
    // New category
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  
  // New properties
  animation: {
    duration: '200ms',
    easing: 'ease-in-out',
  },
};
```

Then update the utility files to include these new properties.
