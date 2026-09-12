import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['three', 'gsap', 'gsap/ScrollTrigger']
    }
  },

  integrations: [preact()]
});