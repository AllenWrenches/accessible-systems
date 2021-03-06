const cleanCSS = require("clean-css");
const htmlMinTransform = require("./_transforms/html-min.js");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

function sortByOrder(values) {
  let vals = [...values]; // this *seems* to prevent collection mutation...
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = function (eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias("home", "home.njk");
  eleventyConfig.addLayoutAlias("page", "page.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");
  eleventyConfig.addLayoutAlias("compress", "layouts/compress.njk");

  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("sw.js");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("sortByOrder", sortByOrder);
  eleventyConfig.addFilter("cssmin", function (code) {
    return new cleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", htmlMinTransform);

  return {
    dir: {
      input: "./",
      output: "./docs",
    },
  };
};
