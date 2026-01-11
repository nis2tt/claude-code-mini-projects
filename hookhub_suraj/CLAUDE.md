# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.1 application built with TypeScript and Tailwind CSS v4. It uses the App Router architecture (app directory).

## Development Commands

### Running the Development Server
```bash
npm run dev
```
The dev server runs on http://localhost:3000 by default.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `.next` directory.

### Starting Production Server
```bash
npm start
```
Runs the production build locally (must run `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js configuration.

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- Main application code is in the `app/` directory
- `app/layout.tsx` - Root layout component with Geist font configuration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global Tailwind CSS styles

### TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` maps to project root
- JSX mode: `react-jsx` (React 19 compatible)
- Target: ES2017

### Styling
- Tailwind CSS v4 with PostCSS integration
- Geist Sans and Geist Mono fonts loaded via next/font/google
- Dark mode support via CSS classes

### ESLint Configuration
- Uses Next.js core web vitals and TypeScript presets
- Configured via eslint.config.mjs (flat config format)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Files

- `next.config.ts` - Next.js configuration (minimal/default setup)
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - ESLint configuration using flat config
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `package.json` - Dependencies and scripts

## Dependencies

### Core
- Next.js 16.1.1
- React 19.2.3
- React DOM 19.2.3

### Dev Dependencies
- TypeScript 5.x
- Tailwind CSS 4.x
- ESLint 9.x with Next.js config
