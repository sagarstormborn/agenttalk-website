# AgentTalk Website

A modern, responsive React website for AgentTalk - the transaction layer for AI agents. Built with TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach with responsive design
- **Interactive Demo**: Live demo page perfect for YC interviews
- **Lead Generation**: Comprehensive contact forms and CTAs
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## 📋 Pages

- **Homepage**: Hero section, value propositions, live counters, demo preview
- **Demo**: Interactive demo with scenario selector and transaction timeline
- **Protocol**: Technical specification and downloadable assets
- **Pricing**: Transparent pricing with calculator and tiers
- **Contact**: Lead capture forms and multiple contact options
- **Integrations**: SDKs and platform integrations (coming soon)
- **Security**: Security and compliance information (coming soon)
- **Customers**: Case studies and testimonials (coming soon)
- **About**: Team and company information (coming soon)
- **Blog**: Product updates and technical content (coming soon)
- **Docs**: API documentation and guides (coming soon)

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Heroicons** for icons
- **Headless UI** for accessible components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agenttalk-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── DemoPage.tsx    # Interactive demo
│   ├── ContactPage.tsx # Contact forms
│   └── ...            # Other pages
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles and Tailwind
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366f1) to Teal (#14b8a6) gradient
- **Secondary**: Gray scale for UI elements
- **Accent**: Amber for highlights and CTAs

### Typography
- **Headings**: Inter font family
- **Code**: JetBrains Mono for code snippets
- **Body**: Inter for general text

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent shadow and border radius
- **Forms**: Accessible form components with validation

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The build output is standard static files that can be deployed to any hosting platform.

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_GA_TRACKING_ID=your_ga_id
```

### Tailwind Configuration
Customize the design system in `tailwind.config.js`:
- Colors
- Typography
- Spacing
- Animations

## 📊 Analytics

The website is prepared for analytics integration:
- Google Analytics 4
- Hotjar for heatmaps
- Custom event tracking

## 🔒 Security

- HTTPS enforcement
- Content Security Policy
- XSS protection
- CSRF protection for forms

## 📈 Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and questions:
- Email: hello@agenttalk.io
- Documentation: [docs.agenttalk.io](https://docs.agenttalk.io)
- GitHub Issues: For bug reports and feature requests

---

Built with ❤️ by the AgentTalk team
