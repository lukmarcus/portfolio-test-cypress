import { defineConfig } from "cypress";
import { config } from "./cypress.config";

export default defineConfig({
  projectId: "2f8n7f",
  component: config.component,
});
