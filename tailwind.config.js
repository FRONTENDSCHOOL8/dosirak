/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary)",
        "secondary-color": "var(--secondary)",
        "tertiary-color": "var(--tertiary)",
        "content-color": "var(--content)",
        "gray300": "var(--gray-300)",
        "gray500": "var(--gray-500)",
        "gray700": "var(--gray-700)",
      }
    },
    fontFamily: {
      "Gong-Gothic-m": ["GongGothicMedium"],
      "Gong-Gothic-l": ["GongGothicLight"],
      "Noto": ["Noto Sans KR"], 
    },
    fontSize: {
      // Gong Gothic
      'login-lg': ['36px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '300' }],
      'heading-lg': ['26px', { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' }],
      'heading-sm': ['20px', { lineHeight: '140%', letterSpacing: '-2%', fontWeight: '300' }],

      // Noto Sans
      'label': ['17px', { lineHeight: '140%', fontWeight: '600' }],
      'paragraph-lg': ['15px', { lineHeight: '150%', letterSpacing: '-1%', fontWeight: '400' }],
      'paragraph-base': ['12px', { lineHeight: '150%', letterSpacing: '-2%', fontWeight: '400' }],
      'paragraph-sm': ['10px', { lineHeight: '150%', letterSpacing: '-2%', fontWeight: '400' }],
    },
  },
  plugins: [],
}
