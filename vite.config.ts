import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
 return {
  define: {
    'process.env.USER_NAME': JSON.stringify(env.USER_NAME), 
    'process.env.PASS_WORD': JSON.stringify(env.PASS_WORD) 
  },
  plugins: [react()],
}
})
