import { defineConfig } from "cypress";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "orrgb4",
  e2e: config.e2e,
});
