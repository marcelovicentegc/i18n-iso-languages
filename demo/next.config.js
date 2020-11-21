const isProduction = process.env.NODE_ENV === 'production'


module.exports = {
  assetPrefix: isProduction ? 'https://cdn.statically.io/gh/marcelovicentegc/i18n-iso-languages/gh-pages/' : '',
};
