module.exports = {
  siteMetadata: {
    title: `Ketchum`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 251,
      },
    },
  ]
};