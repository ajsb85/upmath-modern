# UpMath Modern

A modernized, blazing-fast Markdown and LaTeX online editor. 

![UpMath Modern](https://upmath.me/favicon.png)

## Overview

UpMath Modern is a complete rewrite of the classic UpMath editor, transitioning from a legacy PHP and plain JavaScript stack to a fully typed React application built with TypeScript and Vite. It provides a seamless, zero-backend, client-side experience for drafting rich mathematical documents.

## Features

- **Markdown & LaTeX**: Full support for standard Markdown and `$$` delimited LaTeX math environments.
- **Live Preview**: Real-time rendering with optimized debouncing.
- **Synchronized Scrolling**: Dual-pane editor where the source and preview scroll in perfect sync.
- **Client-Side Only**: Eliminates the need for a PHP backend. Everything runs in the browser.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Bundler**: Vite
- **Markdown Engine**: `markdown-it` (with custom LaTeX extensions)

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

## License

MIT
