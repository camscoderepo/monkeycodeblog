const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://www.gomonkey.blog`)

module.exports = {
  siteMetadata: {
    title: `Go Monkey`,
    description: `A blog I started because I am sick of other blogs.`,
    siteUrl: `https://www.gomonkey.blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
    
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.TARGET || "gomonkey.s3.amazonaws.com",
        protocol: targetAddress.protocol.slice(0, -1),
        hostname: targetAddress.hostname,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
};
