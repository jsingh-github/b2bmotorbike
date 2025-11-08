# Fox Racing B2B Wholesale Catalog

A modern B2B catalog web application built with Next.js 16, TypeScript, and Tailwind CSS, inspired by Fox Racing's bold design aesthetic.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Component-Based Architecture**: Reusable and maintainable React components
- **B2B Focus**: Wholesale catalog with product management capabilities
- **Interactive UI**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🚦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
foxracing/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── ExploreSection.tsx  # Category exploration
│   ├── CategoryBanner.tsx  # Promotional banners
│   ├── WholesaleCatalog.tsx # Product catalog grid
│   ├── PodiumClub.tsx      # Email signup
│   └── Footer.tsx          # Site footer
└── public/
    └── images/             # Static images
```

## 🎨 Design Features

- **Color Scheme**: Black, white, and signature Fox Racing red (#DC2626)
- **Typography**: Clean, bold headlines with Inter font family
- **Layout**: Modern grid-based design with full-width sections

## 🔄 Customization

### Adding Products
Edit the `products` array in `components/WholesaleCatalog.tsx`

### Changing Colors
Update Tailwind classes or modify the color scheme

### Adding Categories
Update the `categories` array in `components/ExploreSection.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
