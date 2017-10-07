/**
 * Converts markdown to html via ShowdownJS
 *
 * @dependencies ShowdownJS
 * @export function convert()
 */

import showdown from 'showdown'

function markdownToHTMLConverter () {
  const showdownOptions = {
    simplifiedAutoLink: true,
    excludeTrailingPunctuationFromURLs: true,
    tables: true,
    tasklists: true
  }

  const converter = new showdown.Converter(showdownOptions)
  converter.setFlavor('github')

  function convert (content) {
    return converter.makeHtml(content)
  }

  return convert
}

export default markdownToHTMLConverter()
