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

  it('should render HTML via props', () => {
    expect(getRenderedText(HTMLPreview, {
      content: '<p>Hello</p>'
    })).to.equal('Hello')
  })
})
