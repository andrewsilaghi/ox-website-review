/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {   
  plugins: [{
    resolve: "gatsby-source-wordpress",
    options: {
      /*
       * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
       * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
       */
      baseUrl: "andrewsilaghi.com/ox/",
      // The protocol. This can be http or https.
      protocol: "http",
      // Indicates whether the site is hosted on wordpress.com.
      // If false, then the assumption is made that the site is self hosted.
      // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
      // If your site is hosted on wordpress.org, then set this to false.
      hostingWPCOM: false,
      // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
      // This feature is untested for sites hosted on wordpress.com.
      // Defaults to true.
      useACF: true,
      // Include specific ACF Option Pages that have a set post ID
      // Regardless if an ID is set, the default options route will still be retrieved
      // Must be using V3 of ACF to REST to include these routes
      // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
      // routes with the ID option_page_1 and option_page_2
      // The IDs provided to this array should correspond to the `post_id` value when defining your
      // options page using the provided `acf_add_options_page` method, in your WordPress setup
      // Dashes in IDs will be converted to underscores for use in GraphQL
     },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
   
  ],

};
