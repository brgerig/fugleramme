import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or whichever framework plugin you use

export default defineConfig({
  base: '/fugleramme/', // Keep this so assets resolve inside your subfolder
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [
    react(),
    // Custom inline plugin to fix the submodule's absolute path
    {
      name: 'fix-submodule-absolute-path',
      transformIndexHtml(html) {
        // Automatically strips the leading slash from the hardcoded script source path
        return html.replace('src="/src/main.tsx"', 'src="src/main.tsx"');
      }
    }
  ]
})
