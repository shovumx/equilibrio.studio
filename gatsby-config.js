module.exports = {
  siteMetadata: {
    title: "Agencia de marketing digital en Querétaro | Equilibrio",
    author: "Equilibrio",
    description:
      "Somos una agencia de marketing digital enfocada en pequeñas y medianas empresas. Nuestras fortalezas: SEO, social media, diseño web y gráfico.",
    siteUrl: "https://equilibrio.studio",
    facebook: "https://facebook.com/equilibrio.studio.mx"
  },
  
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-netlify`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        orientation: "portrait"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 'pixel id here',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Exo`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Exo`,
            subsets: [`latin`]
          },
          {
            family: `PT Sans`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `PT Sans`,
            subsets: [`latin`]
          },
          {
            family: `Abril Fatface`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Abril Fatface`,
            subsets: [`latin`]
          },
          {
            family: `Barlow Condensed`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Barlow Condensed`,
            subsets: [`latin`]
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
