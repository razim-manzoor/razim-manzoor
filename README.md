# Portfolio: Business Strategy & AI

A premium, high-performance personal portfolio website built for **Business Analysts, AI Strategists, and Automation Specialists**.
Designed to move beyond a static resume by *demonstrating* value through interactive elements like the **ROI Calculator**.

![Portfolio Preview](public/og-image.png)

## 🚀 Key Features

-   **First Principles ROI Calculator**: An interactive component allowing visitors to calculate the dollar value of automation.
-   **Dark/Light Mode**: Fully responsive, accessible themes using Tailwind v4 semantic colors.
-   **Data-Driven**: All content (Experience, Skills, Projects) is managed in a single file (`lib/data.ts`) for easy updates.
-   **High Performance**: Built on Next.js 16 (Turbopack) for instant page loads and SEO.
-   **Premium Aesthetics**: Glassmorphism, Framer Motion animations, and modern typography.

## 🛠 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Directory)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```bash
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main landing page composition
│   └── globals.css      # Global styles & Tailwind theme config
├── components/
│   ├── HeroSection.tsx  # Hero banner
│   ├── RoiCalculator.tsx # Interactive value demo
│   ├── NavBar.tsx       # Responsive navigation
│   └── ...              # Other UI components
├── lib/
│   └── data.ts          # <--- EDIT THIS FILE TO UPDATE CONTENT
└── public/              # Static assets (images, resumes)
```

## ⚡ Quick Start

4.  **Clone the repository**:
    ```bash
    git clone https://github.com/razim-manzoor/razim-manzoor.git
    cd razim-manzoor
    ```

5.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

6.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it.

## 📝 Customization Guide

### 1. Updating Content (The "CMS")
You don't need to touch JSX to update your resume details.
Go to `lib/data.ts`. This file contains the `USER_DATA` object:
-   `name`, `role`, `contact`: Basic info.
-   `experience`: Array of job roles. Support bullet points.
-   `skills`: Categorized into `business` and `technical`.
-   `projects`: Featured work.

### 2. Theming (Light/Dark Mode)
This project uses **Tailwind v4** with CSS variables for theming.
-   **Configuration**: Defined in `app/globals.css`.
-   **Usage**: Use semantic classes like `text-foreground` (black in light, white in dark) or `bg-background`.
-   **Toggle**: Managed by `next-themes` in `components/ThemeToggle.tsx`.

## 🚀 Deployment

The easiest way to deploy is **Vercel**.

1.  Push your code to GitHub.
2.  Import the project to Vercel.
3.  Click **Deploy**. (Deployment is zero-config as the app is in the root directory).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
