# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features Server-Side Rendering (SSR) for optimal SEO and performance.

## ✨ Features

- **Server-Side Rendering**: Optimal SEO and performance with Next.js SSR
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, structured data
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Performance**: Optimized images, fonts, and bundle size
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:

- `src/app/layout.tsx`: Update SEO metadata
- `src/app/page.tsx`: Update personal information, skills, and projects
- `src/app/sitemap.ts`: Update with your domain
- `src/app/robots.ts`: Update with your domain

### 2. Content Sections
The homepage includes these sections:
- **Hero**: Main introduction and call-to-action
- **About**: Personal description and quick facts
- **Skills**: Technical skills organized by category
- **Projects**: Showcase of your work with links
- **Contact**: Contact information and social links

### 3. Styling
- Colors: Edit Tailwind classes in components
- Fonts: Update Google Fonts in `layout.tsx`
- Layout: Modify the grid and spacing classes

### 4. SEO Configuration
Update these files for better SEO:
- `src/app/layout.tsx`: Meta tags, Open Graph, Twitter Cards
- `src/app/sitemap.ts`: Site structure for search engines
- `src/app/robots.ts`: Crawling instructions
- `public/`: Add your images (favicon, og-image.jpg)

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Building
npm run build        # Build for production (with SSR)

# Production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Preview
npm run preview      # Build and start production server
```

## 🌐 Deployment

This portfolio uses Server-Side Rendering (SSR). You can deploy it to platforms that support Node.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with SSR support

### Railway
1. Push your code to GitHub
2. Connect your repository to Railway
3. Deploy with automatic SSR support

### Render
1. Push your code to GitHub
2. Connect your repository to Render
3. Deploy with Node.js environment

### Self-hosted
1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Server runs on port 3000 by default

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourname.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
```

### Next.js Configuration
The `next.config.ts` file is pre-configured for:
- Server-side rendering (SSR)
- Image optimization
- Bundle optimization
- SEO enhancements

## 🎯 SEO Features

- **Meta Tags**: Complete title, description, keywords
- **Open Graph**: Facebook and LinkedIn sharing
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Crawling instructions
- **Canonical URLs**: Prevent duplicate content

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation
- Optimized images for all screen sizes

## 🔍 Performance

- **Next.js 15**: Latest performance optimizations with SSR
- **Server-Side Rendering**: Fast initial page loads and SEO benefits
- **Optimized Images**: Automatic image optimization and modern formats
- **Code Splitting**: Automatic bundle splitting
- **Font Optimization**: Google Fonts optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Geist)
- **Linting**: ESLint
- **Package Manager**: npm

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue or contact me directly.

---

**Happy coding! 🚀**
