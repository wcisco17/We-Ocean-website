const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = {
    // Not sure this affects it but just included it just in case
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/another': { page: '/another' },
      };
    },
    webpack: (config, { dev }) => {
      config.module.rules.push({
        test: /\.html$/,
        use: 'raw-loader',
      });
      return config;
    },
  }