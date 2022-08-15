require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Alpha Psi Rho | Alpha Chapter`,
    description: ` Alpha Psi Rho, Alpha Chapter at San Diego State University`,
    siteUrl: `https://sdsualphapsirho.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}
