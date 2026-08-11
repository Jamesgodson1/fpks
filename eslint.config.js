import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const browserGlobals = {
  document: "readonly",
  fetch: "readonly",
  FormData: "readonly",
  localStorage: "readonly",
  navigator: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  window: "readonly"
};

const nodeGlobals = {
  Buffer: "readonly",
  console: "readonly",
  process: "readonly"
};

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "server/generated/**",
      "public/reference-assets/**",
      "public/fuelpack-assets/**"
    ]
  },
  js.configs.recommended,
  {
    files: ["client/src/**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: browserGlobals
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  },
  {
    files: ["server/**/*.js", "api/**/*.js", "scripts/**/*.{js,mjs}", "prisma/**/*.js", "vite.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...browserGlobals,
        ...nodeGlobals
      }
    }
  }
];
