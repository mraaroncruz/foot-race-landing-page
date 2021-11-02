module.exports = {
  siteMetadata: {
    siteUrl: "https://www.footraceapp.com",
    title: "FootRace - Race Anyone, Anywhere",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "iONmVpJ-pw6Y4_KHK2HojQjCNfwcuWe1BQQK18oqIaw",
        spaceId: "uadvnsdjcglj",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CQX3PKFVJK", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
