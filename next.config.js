const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'http://ekdldksp123.github.io' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}