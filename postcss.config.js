module.exports = {
  plugins: {
    'precss': {},
    'autoprefixer': {},
    'css-mqpacker': {
      sort: require('sort-css-media-queries')
    },
    'cssnano': {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    },
  }
}