# Templates

Creating documents from templates is a common task in software development. This document lists some demo projects for creating, testing and rendering templates with open-source libraries.

## Demo projects

Some demo projects:

- [Mustache example layouts](https://github.com/GrumpTech/mustache-example-layouts)\
  Contains example layouts for paginated content and e-mail.
- [template-renderer](https://github.com/GrumpTech/template-renderer)\
  Rendering mustache HTML templates to PDFs with puppeteer and mustache.js.
- template-editor\
  A template editor with functionality to create and test sets of mustache templates referencing each other.\
  See this [demo](/templates/demo).

### Template language

The demo projects all use mustache as template language. The [mustache template syntax](https://github.com/janl/mustache.js#templates) supports variables, conditional templates, repeatable sections and inclusion of other templates. The mustache template engine is [widely available](https://mustache.github.io).

### Rendering templates

Recent developments made it possible to use HTML and CSS for typesetting.

- Browsers are getting close to creating [print quality typography](https://onextrapixel.com/from-print-to-web-creating-print-quality-typography-in-the-browser/).
- [Puppeteer](https://pptr.dev) and [Playwright](https://playwright.dev) are open-source libraries providing control to browsers. Both libraries provide functionality to create PDFs from HTML.
- An open-source library, [paged.js](https://pagedjs.org), paginates HTML content for printing. This library is used to design books with HTML and CSS.

Using HTML as a basis for templates has a couple of advantages. HTML is well known, has a lot of documentation, and is widely supported. Also, it is well suited for version control like [git](https://en.wikipedia.org/wiki/Git).

## Open-source libraries

The following list shows the open-source libraries that made it possible to create, test and render templates.

### Paged.js

An open-source library to paginate HTML content for printing. This library is used to design books with HTML and CSS.\
<https://pagedjs.org>\
<https://github.com/pagedjs/pagedjs>\
<https://ashok-khanna.medium.com/beautiful-pdfs-from-html-9a7a3c565404>\
<https://www.adamhyde.net/some-pagedjs-info>\
License: See project, MIT license at time of writing

### Mustache.js

An open-source JavaScript library to render mustache templates.\
<https://github.com/janl/mustache.js>\
[Template language](#template-language)\
License: See project, MIT License at time of writing

### Stubble

An open-source NuGet package to render mustache templates.\
<https://github.com/StubbleOrg/Stubble>\
[Template language](#template-language)\
License: See project, MIT License at time of writing

### Puppeteer

An open-source Node.js library providing control to Chrome or Chromium used for automated testing and creating PDFs from HTML. Puppeteer is maintained by the Chrome DevTools team.\
<https://pptr.dev>\
<https://github.com/puppeteer/puppeteer>\
License: See project, Apache License 2.0 at time of writing

### Playwright

An open-source library providing control to Chromium, WebKit and Firefox. It is used for automated testing and creating PDFs. Playwright is maintained by Microsoft.\
<https://playwright.dev>\
License: See project, Apache License 2.0 at time of writing

### CodeMirror

A text editor for the web specialized for editing code.\
<https://codemirror.net>\
<https://github.com/codemirror/dev>\
License: See project, MIT License at time of writing

### TinyMCE

An open-source WYSIWYG editor that allows users to create formatted HTML content. Project is funded by selling a cloud version and advanced plugins.\
<https://www.tiny.cloud/docs/tinymce/latest>\
<https://www.npmjs.com/package/tinymce>\
License: See project\
Version 6 has an MIT license.\
Version 7 has a GPLv2 license.
