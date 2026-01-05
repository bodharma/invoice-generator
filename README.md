# ⚠️ ARCHIVED REPOSITORY

> **This repository is now archived and is no longer actively maintained.**
> **For the latest version, please visit: [EphyrTech/invoice-generator](https://github.com/EphyrTech/invoice-generator.git)**

---

# Free Invoice Generator - Fork by Bohdan Lesiv

This is a fork of the original [pranavp10/invoice-generator](https://github.com/pranavp10/invoice-generator) project, created to add specific enhancements and features. The project has since been completely rewritten from scratch and is now maintained at the new repository linked above.

<a href="https://www.producthunt.com/posts/invoice-generator-9bce3e1b-dab2-4a7a-ba7e-e315be868119?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-invoice&#0045;generator&#0045;9bce3e1b&#0045;dab2&#0045;4a7a&#0045;ba7e&#0045;e315be868119" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=453378&theme=light&period=daily" alt="Invoice&#0032;Generator - Get&#0032;paid&#0032;faster&#0032;with&#0032;free&#0032;invoice&#0032;generator | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## 📦 Fork Status

- **Original Repository:** [pranavp10/invoice-generator](https://github.com/pranavp10/invoice-generator)
- **Original Author:** Pranav (pranavkp.me@outlook.com)
- **Fork Maintainer:** Bohdan Lesiv (@bodharma)
- **Current Status:** Archived (Superseded by new version)
- **Active Repository:** [EphyrTech/invoice-generator](https://github.com/EphyrTech/invoice-generator.git)

## ✨ Contributions & Enhancements in This Fork

This fork includes the following enhancements to the original project:

### 1. Decimal Number Support
- **Modified Files:** `customNumberInput.tsx`, `invoiceDetailsForm.tsx`
- **Enhancement:** Changed input pattern validation from `[0-9]*` to `[0-9]*\.?[0-9]*`
- **Impact:** Enables fractional quantities and amounts (e.g., 1.5 hours, 0.75 units, 2.25 items)
- **Use Case:** Perfect for service-based invoicing where partial hours or units are common

### 2. PDF Formatting Improvements
- **Modified Files:** `pdfStyles.ts`
- **Enhancement:** Adjusted `text2xl` font size from 24 to 21 pixels
- **Impact:** Better accommodation for long company names and improved overall PDF layout
- **Use Case:** Prevents text overflow and maintains professional appearance

### 3. Docker Deployment Support
- **New Files:** `Dockerfile`, `.env.local`, `.env.git`
- **Enhancement:** Complete containerization setup with environment configuration
- **Impact:** Production-ready deployment capability with Docker
- **Features:**
  - Multi-stage build optimization
  - Node.js 18 Alpine base image
  - Environment variable management
  - Port 3000 exposure for standard deployment

### 4. Vercel Deployment Fixes
- **Enhancement:** Multiple bug fixes and optimizations for Vercel platform
- **Impact:** Improved stability and reliability in production environments

## 🛠️ Complete Tech Stack

### Frontend Framework
- **Next.js** - Latest version (React framework)
- **React** - Latest version (UI library)
- **TypeScript 5.x** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **PostCSS 8.x** - CSS transformations
- **Autoprefixer 10.x** - CSS vendor prefixes
- **Tailwind Forms** - Form styling plugin
- **Tailwind Animate** - Animation utilities

### UI Components & Libraries
- **Radix UI** - Accessible component primitives
  - Dialog
  - Popover
  - Select
  - Slot
- **Lucide React** - Icon library
- **Framer Motion 11.x** - Animation library
- **CMDK 0.2.1** - Command palette
- **Class Variance Authority** - Component variants
- **React Hook Form 7.x** - Form management
- **React Day Picker 8.x** - Date picker component

### PDF Generation
- **@react-pdf/renderer 3.4.2** - PDF document generation
- **Canvg 4.0.2** - SVG to canvas conversion
- **File Saver 2.0.5** - File download utilities

### Utilities
- **date-fns 3.6.0** - Date manipulation
- **country-flag-icons 1.5.11** - Country flags
- **clsx 2.1.0** - Conditional classNames
- **tailwind-merge 2.2.2** - Tailwind class merging
- **Geist Font 1.3.0** - Typography

### Development Tools
- **ESLint 8.x** - Code linting
- **TypeScript Compiler** - Type checking

### Runtime & Package Management
- **Bun** - Fast JavaScript runtime and package manager (recommended)
- **Node.js 18+** - JavaScript runtime (for Docker)
- **npm** - Package manager (alternative)

### Deployment Options
- **Docker** - Containerized deployment (included in this fork)
- **Vercel** - Serverless deployment (optimized)

## ⛰️ Preview

![806shots_so](https://github.com/pranavp10/invoice-generator/assets/49075129/403cffa1-b540-4d62-a9bd-c3c216802fe1)

## 🚀 Key Features

- **Free & Open Source:** Absolutely no cost, with the freedom to customize and adapt to your specific needs
- **Fast & Efficient:** Generate beautiful invoices in seconds by simply filling in the blanks
- **Unlimited Invoices:** Create as many invoices as you require, forever, at no charge
- **Save Time & Resources:** Eliminate the need for manual invoice creation with spreadsheets and expensive software
- **Decimal Support:** Handle fractional quantities for precise invoicing
- **Professional PDFs:** Optimized formatting for all business needs
- **Docker Ready:** Deploy anywhere with containerization support

## 💻 Local Development Setup

### Prerequisites
- Bun installed (recommended) or Node.js 18+
- Git

### Installation

```bash
# Clone this repository
git clone https://github.com/bodharma/invoice-generator.git
cd invoice-generator

# Install dependencies
bun install
# OR using npm
npm install --legacy-peer-deps

# Create environment file
cp .env.example .env.local

# Start development server
bun run dev
# OR using npm
npm run dev
```

The application will be available at `http://localhost:3000`

### Docker Deployment

```bash
# Build the Docker image
docker build -t invoice-generator .

# Run the container
docker run -p 3000:3000 invoice-generator
```

## 📄 License

This project maintains the original license from the source repository. You are free to use this code as inspiration. Please do not copy it directly. Crediting the original author (Pranav) is appreciated.

## 🙏 Credits & Attribution

- **Original Project:** [Invoice Generator by Pranav](https://github.com/pranavp10/invoice-generator)
- **Original Author:** Pranav (pranavkp.me@outlook.com)
- **Original Live Demo:** [invoice-generator.prolab.sh](https://invoice-generator.prolab.sh/)
- **Fork Enhancements:** Bohdan Lesiv (@bodharma)
- **New Active Repository:** [EphyrTech/invoice-generator](https://github.com/EphyrTech/invoice-generator.git)

## 📝 Migration Notice

If you forked or starred this repository, please note that:
- This version is **no longer maintained**
- All future development happens at [EphyrTech/invoice-generator](https://github.com/EphyrTech/invoice-generator.git)
- The new version is a complete rewrite with improved features
- Please update your bookmarks and forks accordingly

## 🐛 Support

For the archived version:
- This repository is in read-only mode
- No new issues or pull requests will be accepted
- Please refer to the [new repository](https://github.com/EphyrTech/invoice-generator.git) for support

---

**Last Updated:** January 2026
**Archive Date:** January 5, 2026
**Status:** ✅ Archived - Superseded by [new version](https://github.com/EphyrTech/invoice-generator.git)
