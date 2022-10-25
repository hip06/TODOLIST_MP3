/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        'scale-up-center': {
          '0%': {
            '-webkit-transform': 'scale(0.5)',
            transform: 'scale(0.5)'
          },
          '100%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)'
          }
        },
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px)',
            transform: 'translateX(-500px)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(300px)',
            transform: 'translateX(300px)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          }
        },
        'dropdown': {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': 'translateX(300px)',
            transform: 'translateX(300px)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          }
        },
      },

      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left2': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'dropdown': 'dropdown 0.5s ease both',
      },
    },
  },
  plugins: [],
}