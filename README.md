# Upmath Modern v2.0

A modernized, blazing-fast Markdown and LaTeX online editor.

[![Vercel Deployment](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://upmath-modern.vercel.app)
[![Renovate](https://img.shields.io/badge/maintained%20by-renovate-blue?logo=renovate)](https://renovatebot.com/)

![Upmath Modern](https://upmath.me/favicon.png)

## Overview

Upmath Modern is a high-performance, client-side Markdown editor with native LaTeX support. It marks a complete departure from the legacy PHP architecture, offering a professional editing experience powered by the same engine as VS Code (Monaco Editor) and a sleek, responsive UI built with Adobe's Spectrum 2 design system.

**Live Demo**: [https://upmath-modern.vercel.app](https://upmath-modern.vercel.app)

## Key Features

-   **Professional Editing**: Integrated Microsoft Monaco Editor for syntax highlighting, multi-cursor support, and IDE-grade performance.
-   **Native LaTeX Support**: Seamlessly render complex mathematical equations and TikZ diagrams using `$$` delimiters.
-   **Spectrum 2 UI**: A modern, accessible, and professional interface built with `@react-spectrum/s2`.
-   **Adaptive Theming**: Full support for Light and Dark modes, automatically syncing with your operating system and dynamically inverting math equations for perfect legibility.
-   **Zero Backend**: Fast, secure, and privacy-focused—all rendering happens directly in your browser.
-   **AI-Ready**: Includes a dedicated "AI Agent Skill" to help LLMs generate perfectly formatted content for Upmath.
-   **Synchronized Real-time Preview**: Dual-pane layout with intelligent scroll synchronization.

## Architecture & Tech Stack

-   **Frontend Framework**: [React 19](https://react.dev/)
-   **Type Safety**: [TypeScript 5.9](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite 6 (Stable)](https://vitejs.dev/)
-   **Design System**: [@react-spectrum/s2 (Nightly)](https://react-spectrum.adobe.com/s2/index.html)
-   **Code Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
-   **Markdown Engine**: `markdown-it` with custom LaTeX plugins.

## Getting Started

```bash
# Clone and enter the project
git clone https://github.com/ajsb85/upmath-modern.git
cd upmath-modern

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for our code standards and deployment workflows.

## License

MIT - See [LICENSE](./LICENSE) for details.
