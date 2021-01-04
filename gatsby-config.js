module.exports = {
    siteMetadata: {
        title: "hysterical and useless club",
        name: "HAUC (incognito mode)",
        siteUrl: "https://weirdfishes.today/",
        description: "A bunch of semi-derelict drafts and ideas.",
        hero: {
            heading: "hysterical and useless club (incognito mode)",
            maxWidth: 652,
        },
        social: [
            {
                name: "about",
                url: "https://flanintheface.com/@rosenkreuzer",
      },
            {
                name: "mastodon",
                url: "https://flanintheface.com/@rosenkreuzer",
      },
            {
                name: "mastodon",
                url: "https://flanintheface.com/@fitterhappier",
      },
            {
                name: "wordpress",
                url: "https://hystericalanduseless.club/",
      },
            {
                name: "spotify",
                url: "https://open.spotify.com/playlist/37i9dQZEVXcBYolMmEdLr9?si=WZ8PWeYAToKBTTqf2rmC_w",
      },
            {
                name: "rss",
                url: "https://weirdfishes.today/atom.xml",
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
                authorsPage: false,
                sources: {
                    local: true,
                    //contentful: true,
                },
            },
    },

        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Novela by Narative",
                short_name: "Novela",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#fff",
                display: "standalone",
                icon: "src/assets/favicon.png",
            },
    },


        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {},
    },

  ],
};
