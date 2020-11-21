const isProduction = process.env.NODE_ENV === 'production'


module.exports = {
  assetPrefix: isProduction ? "/i18n-iso-languages/" : "/",
};
