# Anil Shrestha - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations powered by Framer Motion
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices
- **Type Safe**: Full TypeScript support

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   └── ui/                # Reusable UI components
│       ├── animated-text.tsx
│       ├── floating-navbar.tsx
│       ├── theme-provider.tsx
│       ├── theme-toggle.tsx
│       └── [shadcn components]
├── data/
│   └── portfolio.ts       # Portfolio data
├── lib/
│   └── utils.ts          # Utility functions
└── types/
    └── index.ts          # TypeScript type definitions
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

- Personal details
- Contact information
- Skills and technologies
- Work experience
- Projects

### Styling

- Customize colors and themes in `src/app/globals.css`
- Modify component styles using Tailwind CSS classes
- Add custom animations using Framer Motion

### Components

- Add new sections in `src/components/sections/`
- Create reusable components in `src/components/ui/`
- Update navigation in `src/components/ui/floating-navbar.tsx`

## 🎨 Design Features

- **Floating Navigation**: Smooth floating navbar with active section highlighting
- **Hero Section**: Eye-catching introduction with animated elements
- **Skills Visualization**: Interactive skill cards with proficiency levels
- **Project Showcase**: Filterable project gallery with hover effects
- **Contact Form**: Functional contact form with email integration
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: anilcrest2400@gmail.com
- **LinkedIn**: [Anil Shrestha](https://linkedin.com/in/anil-shrestha)
- **GitHub**: [anilshrestha](https://github.com/anilshrestha)

---

Built with ❤️ by Anil Shrestha
