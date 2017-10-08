// import Vue from 'vue'
import HTMLPreview from '@/components/HTMLPreview/HTMLPreview'
import { getRenderedText } from './helper'

describe('HTMLPreview.vue', () => {
  it('has props defined', () => {
    expect(HTMLPreview.props).to.exist
  })

  it('has content prop defined', () => {
    expect(HTMLPreview.props.content).to.exist
  })

  it('should render HTML', () => {
    expect(getRenderedText(HTMLPreview, {
      content: '<p>Hello</p>'
    })).to.equal('Hello')

    expect(getRenderedText(HTMLPreview, {
      content: '<h1>Hello</h1>'
    })).to.equal('Hello')
  })
})
