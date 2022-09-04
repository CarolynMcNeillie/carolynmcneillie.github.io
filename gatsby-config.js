module.exports = {
  siteMetadata: {
    title: `Ketchum`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato\:400,400i,700`, `bungee`],
        display: "swap",
      },
    },
  ],
};
