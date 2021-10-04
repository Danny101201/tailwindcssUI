module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './dist/**/*.{jsx,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        tilt:'tilt 10s linear infinite'
      },
      keyframes: {
        tilt: {
          '0%,50%,100%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(1deg)'
          },
          '75%': {
            transform: 'rotate(-1deg)'
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
