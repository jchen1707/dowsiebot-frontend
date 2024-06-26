const path = require('path');

module.exports = {
  reactStrictMode: true, 
  swcMinify: true,       

  sassOptions: {         
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {             
    domains: ['example.com'],  
  },

  env: {                 
    customKey: 'value',  
  },

  
  webpack(config, options) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@public'] = path.join(__dirname, 'public');

    return config;
  },

  
  async headers() {
    return [
      {
        source: '/example-path',
        headers: [
          {
            key: 'X-Example-Header',
            value: 'value',
          },
        ],
      },
    ];
  },


  async rewrites() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
      },
    ];
  },


  i18n: {
    locales: ['en', 'fr', 'es'],  
    defaultLocale: 'en',
  },
};
