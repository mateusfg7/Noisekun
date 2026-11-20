import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";
import tanstack from "ultracite/oxlint/tanstack";
import vitest from "ultracite/oxlint/vitest";

export default defineConfig({
  env: core.env,
  extends: [core, react, next, tanstack, vitest],
  ignorePatterns: [
    ...core.ignorePatterns,
    ".github/**",
    ".claude/**",
    ".agents/**",
  ],
  rules: {
    // Carried over from the previous Biome config.
    "react/exhaustive-deps": "warn",
    "typescript/consistent-type-definitions": ["error", "type"],

    // Style rules the codebase was never written against under Biome.
    // Off rather than mass-rewriting every component in this migration.
    "eslint/func-style": "off",
    "eslint/no-inline-comments": "off",
    "react/function-component-definition": "off",

    // Next/Tailwind/PostCSS configs in apps/web are CommonJS.
    "node/global-require": "off",
    "unicorn/prefer-module": "off",
  },
});
