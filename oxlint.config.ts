import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import core from "ultracite/oxlint/core";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";
import tanstack from "ultracite/oxlint/tanstack";
import vitest from "ultracite/oxlint/vitest";

const jsPlugins = selectJsPlugins(["sonarjs", "react-doctor"]);

export default defineConfig({
  env: core.env,
  extends: [
    core,
    react,
    next,
    tanstack,
    vitest,
    jsPlugins,
    nextJsPlugins,
    shadcn,
    antiSlop,
  ],
  ignorePatterns: [
    ...core.ignorePatterns,
    ".github/**",
    ".claude/**",
    ".agents/**",
  ],
  // Re-declared on the root so dependency analyzers see the plugin packages.
  jsPlugins: [...jsPlugins.jsPlugins, ...shadcn.jsPlugins],
  // oxlint does not merge `settings` from extended configs.
  settings: jsPluginSettings,
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
    "sonarjs/no-require-or-define": "off",
    "unicorn/prefer-module": "off",

    // @shadcn/lint only reads Tailwind v4 CSS themes; on this v3 config it
    // flags plugin and custom classes (form-input, scrollbar-hide, animate-*).
    // Re-enable after migrating to Tailwind v4.
    "shadcn/no-unknown-classes": "off",
  },
});
