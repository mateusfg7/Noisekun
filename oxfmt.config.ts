import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // The archived changelog is generated history; keep it byte-for-byte.
  ignorePatterns: [".github/**", "docs/archive/**"],
});
