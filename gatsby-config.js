module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    siteUrl: 'https://pemalangnotebook.my.id',
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-material-ui',
    '@bumped-inc/gatsby-plugin-optional-chaining',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'https://pemalangnotebook.my.id/',
        protocol: 'http',
        restApiRoutePrefix: 'wp-json',
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          htaccess_user: 'your-htaccess-username',
          htaccess_pass: 'your-htaccess-password',
          htaccess_sendImmediately: false,
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: '54793',
          wpcom_user: 'gatsbyjswpexample@gmail.com',
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: '/jwt-auth/v1/token', // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        cookies: {},
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://source-url.com',
          replacementUrl: 'https://replacement-url.com',
        },
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
          '**/laptop',
          '**/other',
          '**/search',
        ],
        excludedRoutes: ['**/posts/1456'],
        keepMediaSizes: false,
        normalizer({ entities }) {
          return entities;
        },
        normalizers: (normalizers) => [
          ...normalizers,
          {
            name: 'nameOfTheFunction',
            normalizer({ entities }) {
              // manipulate entities here
              return entities;
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
