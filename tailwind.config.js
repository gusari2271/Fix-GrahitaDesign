/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        ink: 'var(--ink)',
        'on-photo': 'var(--on-photo)',
      },
      fontFamily: {
        sans: ['"Century Gothic"', '"Questrial"', '"Jost"', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        photo: '16px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(10, 10, 10, 0.04), 0 1px 2px rgba(10, 10, 10, 0.03)',
        'card-hover': '0 18px 44px rgba(10, 10, 10, 0.08), 0 2px 6px rgba(10, 10, 10, 0.04)',
        pill: '0 12px 36px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
        glass: '0 8px 32px rgba(10, 10, 10, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.65)',
      },
    },
  },
  plugins: [],
};
