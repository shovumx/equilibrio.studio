module.exports = {
  siteMetadata: {
    title: "Agencia de marketing digital en Querétaro",
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
        name: "Agencia de marketing digital en Querétaro | Equilibrio Studio",
        short_name: "Agencia de marketing digital en Querétaro",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/equilibrio-studio.png",
        orientation: "portrait"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://equilibrio.studio',
        sitemap: 'https://equilibrio.studio/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150522236-3",
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Poppins`,
            subsets: [`latin`]
          },
          {
            family: `Alegreya`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Alegreya`,
            subsets: [`latin`]
          },
          {
            family: `Roboto Slab`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Roboto Slab`,
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
