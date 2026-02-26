import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: '#020617',
          panel: '#0f172a',
          accent: '#00D4FF',
          warning: '#FFB800'
        }
      },
      fontFamily: {
        code: ['JetBrains Mono', 'monospace'],
        hud: ['Rajdhani', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.2)'
      }
    }
  },
  plugins: []
} satisfies Config;
