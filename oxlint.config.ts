import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";
import tanstack from "ultracite/oxlint/tanstack";
import vitest from "ultracite/oxlint/vitest";

export default defineConfig({
  env: core.env,
  extends: [core, react, next, tanstack, vitest],
  ignorePatterns: [...core.ignorePatterns, ".github/**"],
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

    // Real findings in existing code, downgraded so the migration lands
    // without behaviour changes. Fix them, then drop the overrides so they
    // fall back to the preset's "error".
    "eslint/no-redeclare": "warn",
    "eslint/no-use-before-define": "warn",
    "import/no-named-as-default": "warn",
    "jsx-a11y/control-has-associated-label": "warn",
    "react/exhaustive-effect-dependencies": "warn",
    "react/hook-use-state": "warn",
    "react/immutability": "warn",
    "react/no-deriving-state-in-effects": "warn",
    "react/set-state-in-effect": "warn",
    "react/todo": "warn",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/no-array-for-each": "warn",
    "unicorn/prefer-number-coercion": "warn",
  },
});
