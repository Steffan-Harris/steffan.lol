# AI Coding Agent Instructions

## Project Overview

Personal portfolio site built with React 19, TypeScript, and TanStack Router. Uses Vite with SWC for fast builds and file-based routing.

## Tech Stack & Architecture

- **Router**: TanStack Router v1 with file-based routing (`src/routes/`)
- **Build**: Vite 7 with React SWC plugin
- **Routing**: Auto-generated route tree (`routeTree.gen.ts`) - DO NOT edit manually
- **Styling**: CSS Modules (`.module.css`) co-located with components
- **Type Safety**: TypeScript 5.8 with project references (`tsconfig.app.json`, `tsconfig.node.json`)

## Critical Workflows

### Development

```bash
npm run dev        # Start dev server (Vite)
npm run build      # TypeScript check + Vite build
npm run lint       # ESLint with flat config
npm run preview    # Preview production build
```

### Router Plugin Order

The TanStack Router plugin **must** be listed before `@vitejs/plugin-react-swc` in [vite.config.ts](vite.config.ts#L6-L12). This generates route tree before React processes JSX.

## Code Conventions

### Component Patterns

- **Props**: Use `PropsWithChildren<T>` for components accepting children (see [Heading.tsx](src/components/Heading.tsx#L4-L6), [Summary.tsx](src/components/Summary.tsx#L3-L5))
- **Styling**: CSS Modules with `clsx` for conditional classes (example: [Heading.tsx](src/components/Heading.tsx#L10))
- **Default Exports**: Components use default exports for consistency

### Routing

- Routes defined in `src/routes/` as `*.tsx` files
- Use `createFileRoute()` for pages (see [index.tsx](src/routes/index.tsx#L8-L10))
- Root route in [\_\_root.tsx](src/routes/__root.tsx) uses `createRootRoute()` with `<Outlet />`
- Router instance in [main.tsx](src/main.tsx#L10) has `scrollRestoration: true`

### Styling

- **Global styles**: [main.css](src/main.css) (black background, custom fonts)
- **Component styles**: CSS Modules imported as `styles` (e.g., `styles.heading`)
- No CSS-in-JS or Tailwind - CSS Modules only

## Project Structure

- `src/routes/` - File-based routes (auto-generates `routeTree.gen.ts`)
- `src/components/` - Reusable UI components with co-located CSS Modules
- `src/hooks/` - Custom React hooks (currently empty)
- `public/` - Static assets

## Important Notes

- React 19 in Strict Mode
- ESLint uses flat config format ([eslint.config.js](eslint.config.js))
- TypeScript uses project references - check both app and node configs when modifying build
- Route tree regenerates automatically on file changes in dev mode
