# Palindrome

Personal boilerplate for Eleventy projects

## Not Included

Heavier-lift techniques that may not be appropriate for every project, but can be referenced from another project:

| Technique                  | Project with example         |
| :------------------------- | :--------------------------- |
| Netlify comment forms      | Fiber blog                   |
| Paginating tagged items    | Personal website             |
| Webmentions                | Personal website             |

## Setup Checklist

* [ ] Update package.json with project details
* [ ] Go thru eleventy.js and un-comment or delete utilities; move require statements to top of file
* [ ] Update head.njk with any info for: RSS, social metadata, icons
* [ ] Update images referenced in manifest.webmanifest

-------------------------------------------------------------

## To build

0. Install [Node](https://nodejs.org/) :)
1. Clone the repo
2. Run `npm install`
3. Run `npm run serve`
4. Visit `localhost:8080`

## Commands

| Command                    | Purpose                      |
| :------------------------- | :--------------------------- |
| npm run serve              | Serve project                |
| npm run build              | Build project                |
| npm run checks             | Validate HTML & lint JS      |
| npm run lint               | Run eslint                   |
| npm run lint:fix           | Run eslint and fix issues    |
| npm run validate           | Run html-validate            |

## Front-Matter

```
---
title: 
date: 2021-##-##
tags: ["posts", "foo", "bar"]
featureSrc: (Omit "-m", which is added automatically)
featureExt: 
featureAlt: 
---
```

## Media

### Blog image sizes

| Size | PX width |
| ---: | -------: |
| s    | 600      |
| m    | 800      |
| l    | 1200     |
| xl   | 2000     |

### Responsive image include

Filename, extension, max size, alt text, classes:

```
{% responsiveImage "melanierichards-", "jpg", "xl", "Alt", "" %}
```

* Max size can be `l` or `xl`
* Classes can include `c-media--limit-width`

## Reference

* [Eleventy docs](https://www.11ty.dev/docs/)
* [ESLint docs](https://eslint.org/)
* [HTML Validate docs](https://html-validate.org/)
* [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html)
* [Luxon date formatting](https://moment.github.io/luxon/docs/manual/formatting.html)