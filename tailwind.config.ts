import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '480px',
        xsm: '522px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xxl': '1322px',
        '2xl': '1440px',
        '3xxl': '1500px',
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2200px',
        '6xl': '2800px',
        '7xl': '3500px',
        '8xl': '4700px',
      },
    },
  },
  plugins: [],
}
export default config
