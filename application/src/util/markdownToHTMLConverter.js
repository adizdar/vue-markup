/**
 * Converts markdown to html via ShowdownJS
 *
 * @dependencies ShowdownJS
 * @dependencies showdown-highlight
 * @export function convert()
 */

import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'

function markdownToHTMLConverter () {
  const showdownOptions = {
    simplifiedAutoLink: true,
    excludeTrailingPunctuationFromURLs: true,
    tables: true,
    tasklists: true,
    extensions: [showdownHighlight]
  }

  const converter = new showdown.Converter(showdownOptions)
  converter.setFlavor('github')

  function convert (content) {
    return converter.makeHtml(content)
  }

  return convert
}

export default markdownToHTMLConverter()
