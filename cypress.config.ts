import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  video: false,
  viewportHeight: 1200,
  viewportWidth: 1900,
});
