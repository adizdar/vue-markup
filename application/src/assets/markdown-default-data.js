const getDefaultMarkdownData = () => {
  return 'GitHub Flavored Markdown \n' +
          '======================== \n' +
          'Everything from markdown plus GFM features: \n' +
          '\n' +
          '## URL autolinking \n' +
          '\n' +
          'Underscores_are_allowed_between_words. \n' +
          '\n' +
          '## Strikethrough texta \n' +
          '\n' +
          'GFM adds syntax to strikethrough text, which is missing from standard Markdown. \n' +
          '\n' +
          '~~Mistaken text.~~ \n' +
          '~~**works with other formatting**~~ \n' +
          '\n' +
          '~~spans across \n' +
          'lines~~ \n' +
          '\n' +
          '## Fenced code blocks (and syntax highlighting) \n \n' +
          '```javascript \n' +
          'for (var i = 0; i < items.length; i++) { \n' +
            '  console.log(items[i], i); // log them \n' +
          '} \n' +
          '```' +
          '\n## Task Lists \n' +
          '\n' +
          '- [ ] Incomplete task list item \n' +
          '- [x] **Completed** task list item \n' +
          '\n' +
          '## A bit of GitHub spice \n' +
          '\n' +
          'See http://github.github.com/github-flavored-markdown/.'
}

export default getDefaultMarkdownData()
