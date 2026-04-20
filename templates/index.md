# Templates

Generating PDF documents from templates is a common task in software development. Recent developments have made HTML a suitable solution for typesetting and PDF generation.

- Browsers are approaching [print-quality typography](https://onextrapixel.com/from-print-to-web-creating-print-quality-typography-in-the-browser/).
- Open-source browser automation libraries like [Puppeteer](https://pptr.dev) and [Playwright](https://playwright.dev) support generating PDFs from HTML.
- [Paged.js](https://pagedjs.org), a library for designing books with HTML, enables creating paginated content.

Using HTML for templates provides several benefits: HTML is widely known, well-documented, and easily managed through version control systems like [git](https://en.wikipedia.org/wiki/Git).

## Projects

The following projects explore PDF generation using open-source libraries.

- [template-renderer](https://github.com/GrumpTech/template-renderer): A Node.js proof of concept for generating PDFs from mustache HTML templates using Playwright and mustache.js.
- [Example mustache template layouts](https://github.com/GrumpTech/mustache-example-layouts) for email and HTML pagination.
- [PDF generation benchmarks](https://github.com/GrumpTech/pdf-benchmarks): Node.js and C# benchmarks for PDF generation using Puppeteer and Playwright.
- [lezer-mustache](https://github.com/GrumpTech/lezer-mustache): A mustache parser for Lezer created for syntax highlighting in CodeMirror editors.
- *template-editor*: A tool for creating and testing mustache templates that reference each other.\
  See this [demo](/templates/demo).

In these projects, mustache is used as the template language due to its simple [syntax](https://github.com/janl/mustache.js#templates) and the widespread availability of the [mustache template engine](https://mustache.github.io). The mustache syntax supports variables, conditionals, repeatable sections, and the inclusion of other templates.

## Typesetting with CSS

Browsers provide the following CSS styles for typesetting.

- **orphans** - minimum number of lines at the bottom of a page
- **widows** - minimum number of lines at the top of a page
- **break-before: avoid-page** - avoid page break before a HTML element
- **break-after: avoid-page** - avoid page break after a HTML element
- **text-align: justify** - align text to the left and right edges of lines, except at the last line
- **hyphens: auto** - hyphenate words according to the rules for the language specified with the `lang` HTML attribute

## Open-source libraries

Various open-source libraries are available for template creation, testing, and rendering. These libraries are used in the projects described above.

### Paged.js

An open-source library for paginating HTML content for print. This library is created for designing books with HTML.\
<https://pagedjs.org>\
<https://github.com/pagedjs/pagedjs>\
<https://ashok-khanna.medium.com/beautiful-pdfs-from-html-9a7a3c565404>\
<https://www.adamhyde.net/some-pagedjs-info>\
License: See project, MIT license at time of writing

### Mustache.js

An open-source JavaScript library for rendering mustache templates.\
<https://github.com/janl/mustache.js>\
[Template language](#template-language)\
License: See project, MIT License at time of writing

### Stubble

An open-source NuGet package for rendering mustache templates.\
<https://github.com/StubbleOrg/Stubble>\
[Template language](#template-language)\
License: See project, MIT License at time of writing

### Playwright

An open-source library that provides control over Chromium, WebKit and Firefox. It is used for automated testing and PDF generation. Playwright is maintained by Microsoft.\
<https://playwright.dev>\
License: See project, Apache License 2.0 at time of writing

### Puppeteer

An open-source Node.js library that provides control over Chrome or Chromium. It is used for automated testing and PDF generation. Puppeteer is maintained by the Chrome DevTools team.\
<https://pptr.dev>\
<https://github.com/puppeteer/puppeteer>\
License: See project, Apache License 2.0 at time of writing

### CodeMirror

A text editor for the web specialized in editing code.\
<https://codemirror.net>\
<https://github.com/codemirror/dev>\
License: See project, MIT License at time of writing

### TinyMCE

An open-source WYSIWYG editor that allows users to create formatted HTML content. This project is funded through sales of a cloud version and advanced plugins.\
<https://www.tiny.cloud/docs/tinymce/latest>\
<https://www.npmjs.com/package/tinymce>\
License: See project\
Version 6 has an MIT license.\
Version 7 has a GPLv2 license.
