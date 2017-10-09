import Vue from 'vue'
import MarkupMirror from '@/components/MarkupEditor/MarkupMirror'

describe('MarkupMirror.vue', () => {
  it('has methods defined', () => {
    expect(MarkupMirror.methods).to.exist
  })

  it('has onEditorCodeChange method defined', () => {
    expect(MarkupMirror.methods.onEditorCodeChange).to.exist
  })

  it('should onEditorCodeChange be a function', () => {
    expect(MarkupMirror.methods.onEditorCodeChange).to.be.a('function')
  })

  it('has data defined', () => {
    expect(MarkupMirror.data).to.exist
  })

  it('sets the correct default data', () => {
    expect(MarkupMirror.data).to.be.a('function')

    const defaultData = MarkupMirror.data()
    expect(defaultData.editorOptions).to.be.a('object')
  })

  it('has components defined', () => {
    expect(MarkupMirror.components).to.exist
  })

  it('has codemirror component', () => {
    expect(MarkupMirror.components.codemirror).to.exist
  })

  it('should emit an input event onEditorCodeChange', () => {
    const Constructor = Vue.extend(MarkupMirror)
    const vm = new Constructor()

    // Wrap vm's method $emit to record/spy on it
    sinon.spy(vm, '$emit')

    // Call method to trigger the built in emit
    vm.onEditorCodeChange()

    // Get the recording of the spy object
    expect(vm.$emit).to.have.been.calledWith('input')
  })

  // Asserting rendered result by actually rendering the component
  it('should render DOM node & component', () => {
    var vm = new Vue({
      template: '<div><MarkupMirror></MarkupMirror></div>',
      components: {
        MarkupMirror
      }
    }).$mount()

    expect(vm.$el.querySelector('.vmd-markup-editor-textarea')).to.exist
  })
})
