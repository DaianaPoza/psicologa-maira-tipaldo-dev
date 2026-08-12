import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = "psicologa-maira-tipaldo";

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});

