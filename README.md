# React E-commerce Application

A modern e-commerce application built with React, TypeScript, and Vite. This project includes a robust setup with state management, styling, testing, and code quality tools.

## 🚀 Features

- ⚡️ **Fast Development**: Built with Vite for optimal development experience
- 🎨 **Modern UI**: Styled with Tailwind CSS
- 🔄 **State Management**: Redux Toolkit for predictable state management
- 🧪 **Testing**: Vitest and React Testing Library for comprehensive testing
- 📝 **Type Safety**: TypeScript for better developer experience
- ✨ **Code Quality**: ESLint with modern flat config for code quality

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- Vitest
- React Testing Library
- ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-ecomm
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

## 🏗️ Build

Build the application for production:
```bash
npm run build
```

## 🧪 Testing

Run tests:
```bash
npm run test
```

Generate test coverage report:
```bash
npm run test:coverage
```

## 📝 Code Quality

Check code quality:
```bash
npm run lint
```

Automatically fix linting issues:
```bash
npm run lint:fix
```

## 📁 Project Structure

```
src/
  ├── App.tsx           # Main application component
  ├── store/            # Redux store configuration
  │   └── store.ts
  ├── test/             # Test setup
  │   └── setup.ts
  ├── App.test.tsx      # Sample test file
  └── main.tsx          # Application entry point
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `vitest.config.ts` - Vitest configuration
- `eslint.config.js` - ESLint configuration (flat config)
- `tailwind.config.cjs` - Tailwind CSS configuration
- `postcss.config.cjs` - PostCSS configuration

## 🎨 Setup Tailwind Future Instructions

If you need to set up Tailwind CSS in a new Vite + React project, follow these specific steps to ensure compatibility:

1. Install these exact versions of the required packages:
```bash
npm install -D tailwindcss@3.3.0 postcss@8.4.31 autoprefixer@10.4.16
```

2. Create or update `postcss.config.cjs`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

3. Ensure `tailwind.config.cjs` has the correct content paths:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

These specific versions and configurations work well together with Vite and React, avoiding any PostCSS plugin compatibility issues.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
