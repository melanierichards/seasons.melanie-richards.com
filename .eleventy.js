const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (eleventyConfig) {

  // UNIVERSAL

  // Don't try to build asset files, just transparently copy them through
  eleventyConfig.addPassthroughCopy('assets');

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

  // DATE FILTERS

  // Machine-readable dates
  /*
      eleventyConfig.addFilter("machineDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).toISO();
      });
      */

  // Prettify dates
  /*
      eleventyConfig.addFilter("prettyDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).toFormat('MMM dd, yyyy');
      });
      */

  // Prettify ISO dates
  /*
      eleventyConfig.addFilter("prettyISODate", function(value) {
        return DateTime.fromISO(value, {zone: 'utc'}).toFormat('MMM dd, yyyy');
      });
      */
};
