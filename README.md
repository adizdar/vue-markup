# vue-markup

> A markup editor build with VueJS 2.

Right now the POC phase is completed and the editor can be used for live
Markdown to HTML Conversion.

## Todo for MVP:
- [ ] UI (navbar , themes and co)
- [ ] Mobile UI
- [ ] To PDF, HTML and Markdown export
- [ ] Github project README.md importer
- [ ] Server side rendering for bigger projects
- [ ] Tabs / Pagination for multiple projects
- [ ] Google Drive / Dropbox import and export
- [ ] Multi Person Editing
- [ ] Save Session
- [ ] Import Markdown file

Every TODO will be implemented in separate branches with unit tests for every feature.

## Unit test's
More infos can be found in the [README.md](test/unit/README.md) inside the test folder.

## End-to-End (e2e) test's
No tests implemented for now.

## Style guide:
https://vuejs.org/v2/style-guide/index.html
http://slides.com/evanyou/semicolons#/

## Architecture and Structure
[guide](http://vuejs-templates.github.io/webpack/) and
[docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tips
### To enable Linter in Atom (for vue files):

1. npm install --save-dev eslint-plugin-html
https://github.com/BenoitZugmeyer/eslint-plugin-html

2. Go to Settings-> linter-eslint and enable "Linter HTML Files"

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Warnings
- npm WARN karma-sinon-chai@1.3.2 requires a peer of sinon@^2.1.0 but none is installed. You must install peer dependencies yourself. Issue already exist [here](https://github.com/vuejs-templates/webpack/issues/959) needs to be ignored for now.
