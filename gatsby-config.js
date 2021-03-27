module.exports = {
  siteMetadata: {
    title: `Bradley Schoeneweis`,
    name: `Bradley Schoeneweis`,
    siteUrl: `https://bschoeneweis.github.io`,
    description: `Bradley Schoeneweis | Development`,
    hero: {
      heading: `Bradley Schoeneweis | Development`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/bschoeneweis`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/bradley-schoeneweis/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-NXCH4KEE50',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false
      },
    },
  ],
};
