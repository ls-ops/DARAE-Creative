# DARAE Creative — Landing Page Frontend

> **We Build Digital Reality.**
> Modern corporate precision and atmospheric glassmorphism landing page for DARAE Creative — an enterprise-grade creative and IT solutions agency rooted in Bandung, Indonesia.

---

## 🚀 Live Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: JavaScript (JSX)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) ready (`vercel.json` included)

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── project-1-artisan.jpg
│   │   ├── project-2-logistics.jpg
│   │   ├── project-3-kinetik.jpg
│   │   ├── project-4-analytics.jpg
│   │   └── bandung-hq.jpg
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── (local asset copies)
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navbar with active scroll spy & mobile drawer
│   │   └── Footer.jsx          # Brand footer, social links, quick navigation & contact info
│   ├── sections/
│   │   ├── HeroSection.jsx       # Hero with ambient radial glow & live interactive dashboard mockup
│   │   ├── TechStackSection.jsx  # Interactive technology stack badges
│   │   ├── WhyDaraeSection.jsx   # 3+2 Bento grid architecture with value proposition
│   │   ├── ServicesSection.jsx   # 3 primary service offerings with feature checklists
│   │   ├── PortfolioSection.jsx  # Interactive filterable portfolio showcase
│   │   ├── TrustRibbonSection.jsx# Trust metrics and local tech hub signature
│   │   ├── CtaSection.jsx        # Atmospheric conversion call-to-action
│   │   ├── FaqSection.jsx        # Accessible FAQ accordion with smooth toggle
│   │   └── ContactSection.jsx    # Form validation & direct WhatsApp (+62 821 1708 8846) integration
│   ├── App.jsx                 # App root composing all sections
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind directives & glassmorphic styles
├── index.html                  # Semantic HTML with SEO meta tags & Plus Jakarta Sans font
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 # Vercel deployment rewrites and build settings
└── .gitignore
```

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v24.16.0)
- npm `v9+` or `v10+`

### 2. Installation
```bash
npm install
```
*(On Windows PowerShell with strict execution policy, use `npm.cmd install`)*

### 3. Start Local Development Server
```bash
npm run dev
```
The application will start at `http://localhost:3000` (or `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Vercel Deployment Instructions

### Method A: Deploy via Vercel CLI (Recommended)
1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the project root directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - **Set up and deploy?**: `Y`
   - **Which scope?**: Select your account
   - **Link to existing project?**: `N`
   - **Project name?**: `darae-creative`
   - **Directory located?**: `./`
   - **Want to modify settings?**: `N` (Vercel automatically detects Vite from `vercel.json` and `package.json`)
4. For production release:
   ```bash
   vercel --prod
   ```

### Method B: Deploy via GitHub / Git Repository
1. Push the code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete DARAE Creative landing page frontend"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Open [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your repository.
4. Vercel auto-configures:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your site will be live on a `*.vercel.app` URL within seconds!

---

## ✨ Features Implemented

- **Stitch Design Fidelity**: Precise reproduction of oceanic palette (`#001523` surface, `#75DED9` primary, `#087F8C` secondary), glassmorphic elevation, and typography.
- **Section-Based Navigation**: Smooth scrolling between sections (`#home`, `#about`, `#services`, `#portfolio`, `#faq`, `#contact`) with scroll spy highlighting.
- **Responsive Mobile Navigation**: Touch-friendly hamburger drawer with animated transitions and keyboard accessibility.
- **Interactive Mockup Simulation**: Hero section featuring simulated browser interface, SVG sparkline telemetry chart, MoM yield metrics, and security audit badges.
- **Portfolio Category Filtering**: Filter selected works dynamically by category (`all`, `web`, `it`, `creative`).
- **Accessible Accordion FAQ**: Keyboard-friendly collapsible panels with smooth animated chevrons.
- **Contact Form Validation & WhatsApp Integration**: Real-time form validation with error states; upon submission, formats project inquiries and forwards directly to DARAE WhatsApp (`+62 821 1708 8846`).
- **SEO & Social Optimization**: Open Graph tags, Twitter cards, meta descriptions, semantic HTML5 structure, and locally stored image assets.
