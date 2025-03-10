export default {
  title: "Abishek Blog",
  tagline: "Thoughts and Experiences",
  url: "https://your-website.com",
  baseUrl: "/blog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "public/favicon.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          path: "blog",
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
};
