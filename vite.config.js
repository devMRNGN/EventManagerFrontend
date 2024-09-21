import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@auth": path.resolve(__dirname, "./src/modules/auth"),
      "@core": path.resolve(__dirname, "./src/modules/core"),
      "@pages": path.resolve(__dirname, "./src/modules/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@controllers": path.resolve(__dirname, "./src/controllers"),
      "@components": path.resolve(__dirname, "./src/components"),
    }
  }
})
