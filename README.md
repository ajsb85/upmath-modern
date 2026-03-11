# Upmath Modern

A modernized, blazing-fast Markdown and LaTeX online editor.

[![Vercel Deployment](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://upmath-modern.vercel.app)
[![Renovate](https://img.shields.io/badge/maintained%20by-renovate-blue?logo=renovate)](https://renovatebot.com/)

![Upmath Modern](https://upmath.me/favicon.png)

## Overview

Upmath Modern is a complete rewrite of the classic Upmath editor, transitioning from a legacy PHP and plain JavaScript stack to a fully typed React application built with TypeScript and Vite. It provides a seamless, zero-backend, client-side experience for drafting rich mathematical documents.

**Live Demo**: [https://upmath-modern.vercel.app](https://upmath-modern.vercel.app)

## Features

-   **Monaco Editor**: Powered by the same engine as VS Code for a professional editing experience.
-   **Markdown & LaTeX**: Full support for standard Markdown and `$$` delimited LaTeX math environments.
-   **Live Preview**: Real-time rendering with optimized debouncing.
-   **Synchronized Scrolling**: Dual-pane editor where the source and preview scroll in perfect sync.
-   **Adaptive Dark Mode**: Fully responsive UI that adapts to your system theme.
-   **Client-Side Only**: Eliminates the need for a PHP backend. Everything runs in the browser.
-   **AI Agent Skills**: Includes structured instructions for LLMs to generate Upmath-compatible content.

## Tech Stack

-   **Framework**: React 18
-   **Language**: TypeScript
-   **UI Library**: [@react-spectrum/s2](https://react-spectrum.adobe.com/s2/index.html)
-   **Bundler**: Vite
-   **Editor**: Monaco Editor
-   **Markdown Engine**: `markdown-it` (with custom LaTeX extensions)

## AI Agent Skills

This repository contains a `skills/` directory with a dedicated skill for AI Agents. You can use `skills/upmath-writer.md` to instruct an LLM on how to produce perfectly formatted scientific content for this editor.

## Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

MIT
