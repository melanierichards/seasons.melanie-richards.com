const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (eleventyConfig) {

  // UNIVERSAL

  // Don't try to build pages from these files
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('manifest.webmanifest');
  eleventyConfig.addPassthroughCopy('service-worker.js');
  eleventyConfig.addPassthroughCopy('robots.txt');

  // Insert SVG contents
  eleventyConfig.addPlugin(svgContents);

  // Prettify slug names
  eleventyConfig.addFilter('prettySlugName', function (value) {
    const slugString = value.replace('-', ' ').split(' ');
    const prettyString = [];
    for (const word of slugString) {
      prettyString.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return prettyString.join(' ');
  });
};
