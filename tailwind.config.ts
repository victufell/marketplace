import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': {
        'base':'#F24D0D',
        'dark': '#C43C08',
      },
      'blue': {
        'light': '#D7EFF9',
        'dark': '#009CF0',
        'base': '#5EC5FD',
      },
      'gray': {
        100: '#ADADAD',
        200: '#949494',
        300: '#666666',
        400: '#3D3D3D',
        500: '#1D1D1D'
      },
      'white': '#FFFFFF',
      'background': '#FBF4F4',
      'shape': '#F5EAEA',
      'danger': '#DC3545',
      'success': '#28A745'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        DM_Sans: ['DM-sans', 'sans-serif']

      },
    }
  },
  plugins: [],
} satisfies Config;
