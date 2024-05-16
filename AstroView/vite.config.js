import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => { 
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins:[react()],
    server: {
      host:true
    },
    define: {
      'process.env.VITE_NASA_API_KEY': 
      JSON.stringify(env.VITE_NASA_API_KEY),
      'process.env.APP_USE_AVT': env.APP_USE_AVT,
    },
  };
});