# SaaS Contracts Dashboard

A modern, responsive SaaS contracts management dashboard built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- Login (mocked authentication)
- Upload files (simulated)
- Contracts dashboard (list, search, filter, pagination)
- Contract detail view (clauses, AI insights, evidence)
- Responsive, clean UI

## Tech Stack
- React (functional components, hooks)
- TypeScript
- Tailwind CSS
- Context API for state management
- Vite (build tool)

## Setup Instructions
1. **Install dependencies:**
  ```sh
  npm install
  ```
2. **Start the development server:**
  ```sh
  npm run dev
  ```
3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure
- `public/contracts.json` — Mock contracts data
- `src/components/` — UI components (Auth, Common, Dashboard, etc.)
- `src/context/` — Context providers (Auth)
- `src/hooks/` — Custom hooks (useContracts)
- `src/pages/` — Page components (Dashboard, Login, ContractDetail)
- `src/styles/` — Tailwind and custom CSS

## Deployment
- Deploy on Vercel or Netlify (free tier)
- Public GitHub repo

## Assumptions
- No backend required; all data is mocked
- Authentication is simulated with a mock JWT

## Decisions
- Used Context API for simplicity
- Tailwind for rapid, consistent styling

---

**UI/UX Developer Assignment**

See assignment details in the project root or provided documentation.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
