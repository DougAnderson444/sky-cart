import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $config: path.resolve(__dirname, 'config.js')
    }
  }
}

export default config
