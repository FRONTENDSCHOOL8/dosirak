/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '430px' },
      tablet: { max: '1024px' },
    },
    extend: {
      colors: {
        "primary-color": "var(--primary)",
        "secondary-color": "var(--secondary)",
        "tertiary-color": "var(--tertiary)",
        "content-color": "var(--content)",
        "content-transparent": "rgba(51, 51, 51, 0.50)",
        "semiblack": "var(--semiblack)",
        "gray50": "var(--gray-50)",
        "gray100": "var(--gray-100)",
        "gray200": "var(--gray-200)",
        "gray300": "var(--gray-300)",
        "gray400": "var(--gray-400)",
        "gray500": "var(--gray-500)",
        "gray600": "var(--gray-600)",
        "gray700": "var(--gray-700)",
        "gray800": "var(--gray-800)",
      },
      backgroundImage: (theme) => ({
        'circle-uncheck': "url('@/assets/register/circle-uncheck.svg')",
        'circle-check': "url('@/assets/register/circle-check.svg')",
        uncheck: "url('@/assets/register/uncheck.svg')",
        check: "url('@/assets/register/check.svg')",
        'square-uncheck': "url('@/assets/common/square-uncheck.svg')",
        'square-check': "url('@/assets/common/square-check.svg')",
      }),
    },
    fontFamily: {
      'Gong-Gothic-m': ['GongGothicMedium'],
      'Gong-Gothic-l': ['GongGothicLight'],
      Noto: ['Noto Sans KR'],
    },
    fontSize: {
      // Gong Gothic
      'login-lg': [
        '36px',
        { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '300' },
      ],
      'heading-lg': [
        '26px',
        { lineHeight: '140%', letterSpacing: '-1%', fontWeight: '500' },
      ],
      'heading-sm': [
        '20px',
        { lineHeight: '140%', letterSpacing: '-2%', fontWeight: '300' },
      ],

      // Noto Sans
      label: ['17px', { lineHeight: '140%', fontWeight: '600' }],
      'paragraph-lg': [
        '15px',
        { lineHeight: '150%', letterSpacing: '-1%', fontWeight: '400' },
      ],
      'paragraph-base': [
        '12px',
        { lineHeight: '150%', letterSpacing: '-2%', fontWeight: '400' },
      ],
      'paragraph-sm': [
        '10px',
        { lineHeight: '150%', letterSpacing: '-2%', fontWeight: '400' },
      ],
    },
    boxShadow: {
      'card': '0px 4px 4px 0px rgba(171, 171, 171, 0.25)',
      'list': '0px 1px 4px 2px rgba(171, 171, 171, 0.25)'
    },
    backgroundImage: {
      'card-group-gradient':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 18.21%, rgba(0, 0, 0, 0.04) 41.52%, rgba(0, 0, 0, 0.53) 84.87%)',
      'card-feed-gradient':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.00) 49%)',
    },
  },
  plugins: [],
};
