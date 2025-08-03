/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
  extend: {
    keyframes: {
      'fade-in': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.3s ease-out',
    },
  },
},
}

