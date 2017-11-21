import converter from '@/util/markdownToHTMLConverter'

describe('markdownToHtmlConverter.js', () => {
  it('should exist', () => {
    expect(converter).to.exist
  })

  it('should be a function', () => {
    expect(converter).to.be.a('function')
  })

  it('should convert **markdown** to <p><strong>markdown</strong></p>', () => {
    const html = converter('**Foo**')
    expect(html).to.equal('<p><strong>Foo</strong></p>')
  })

  it('should convert `code` to <code>code</code>', () => {
    const html = converter('`Bar`')
    expect(html).to.equal('<p><code>Bar</code></p>')
  })

  it('should convert links to html href', () => {
    let html = converter('[github](www.github.com)')
    let shouldBe = '<p><a href="www.github.com">github</a></p>'

    // Replace all break lines and white space, so we can compare only the
    // markdown to html conversion
    html = html.replace(/[\r\n\s]+/g, '')
    shouldBe = shouldBe.replace(/[\r\n\s]+/g, '')

    expect(html).to.equal(shouldBe)
  })

  it('should convert >block to <blockquote><p>block</p></blockquote>', () => {
    let html = converter('>Foo')

    // Replace all break lines and white space, so we can compare only the
    // markdown to html conversion
    html = html.replace(/[\r\n\s]+/g, '')

    expect(html).to.equal('<blockquote><p>Foo</p></blockquote>')
  })

  it('should convert tasklist syntaks to check box', () => {
    let shouldBe = '<ul><li class="task-list-item" style="list-style-type: none;">' +
    '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;">Taks</li></ul>'

    let html = converter('- [] Taks')

    // Replace all break lines and white space, so we can compare only the
    // markdown to html conversion
    html = html.replace(/[\r\n\s]+/g, '')
    shouldBe = shouldBe.replace(/[\r\n\s]+/g, '')

    expect(html).to.equal(shouldBe)
  })

  it('should convert table syntaks to html table', () => {
    let markdownForTable = '| h1    |    h2   |      h3 | \n' +
                           '|:------|:-------:|--------:| \n' +
                           '| 100   | [a][1]  | ![b][2] | \n'
    let shouldBe = '<table><thead><tr><th id="h1" style="text-align:left;">h1</th>' +
                  '<th id="h2" style="text-align:center;">h2</th>' +
                  '<th id="h3" style="text-align:right;">h3</th>' +
                  '</tr>< /thead><tbody><tr><td style="text-align:left;">100</td >' +
                  '<td style="text-align:center;">[a][1]</td> < td style = "text-align:right;" > ![b][2] < /td>' +
                  '</tr > </tbody> < /table>'
    let html = converter(markdownForTable)

    // Replace all break lines and white space, so we can compare only the
    // markdown to html conversion
    html = html.replace(/[\r\n\s]+/g, '')
    shouldBe = shouldBe.replace(/[\r\n\s]+/g, '')

    expect(html).to.equal(shouldBe)
  })
})
