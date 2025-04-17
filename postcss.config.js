
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: {
            '--mediaTablet': '(max-width: 768px)',
            '--mediaLaptop': '(max-width: 1024px)',
            '--mediaDesktop': '(max-width: 1440px)',
            '--mediaMobile': '(max-width: 480px)',
          },
        },
      ],
    },
  },
}
