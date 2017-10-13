import Vue from 'vue'
import Editor from '@/views/Editor'

describe('Editor.vue', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(Editor)

    vm = new Constructor().$mount()
  })

  it('has default data', () => {
    expect(Editor.data).to.exist
    expect(Editor.data).to.be.a('function')
  })

  it('has the correct default data', () => {
    const defaultData = Editor.data()
    expect(defaultData.fromMarkupEditor).to.exist
  })

  it('sets the correct default data', () => {
    const defaultData = Editor.data()
    expect(defaultData.fromMarkupEditor).to.not.be.empty
  })

  it('should have computed', () => {
    expect(Editor.computed).to.exist
  })

  it('has convertMarkupEditorData in computed', () => {
    expect(Editor.computed.convertMarkupEditorData).to.exist
    expect(Editor.computed.convertMarkupEditorData).to.be.a('function')
  })

  it('sets the computed convertMarkupEditorData after data update', () => {
    vm.fromMarkupEditor = '**Foo**'
    expect(vm.convertMarkupEditorData).to.not.be.empty
  })

  it('updates the rendered message when vm.fromMarkupEditor updates', done => {
    vm.fromMarkupEditor = 'foo'

    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vm.$el.textContent).to.not.be.empty
      done()
    })
  })

  it('has rendered default data', () => {
    var vm = new Vue({
      template: '<div><Editor></Editor></div>',
      components: {
        Editor
      }
    }).$mount()

    expect(vm.$el.querySelector('.vmd-editor-preview')).to.not.be.empty
  })
})
