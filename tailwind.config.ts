import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#188DFF",
        'primary-2': "#87C4FF",
        "accent": "#DDEAFF",
        'accent-2': "#F7FAFF",
        "secondary": "#FFF",
        
      }
    }
  },
  plugins: [],
}
export default config
