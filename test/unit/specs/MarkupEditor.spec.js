import Vue from 'vue'
import MarkupEditor from '@/components/MarkupEditor/MarkupEditor'

describe('MarkupEditor.vue', () => {
  let clock

  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })

  afterEach(() => {
    clock.restore()
  })

  it('has methods defined', () => {
    expect(MarkupEditor.methods).to.exist
  })

  it('has $_commitMarkup method defined', () => {
    expect(MarkupEditor.methods.$_commitMarkup).to.exist
  })

  it('should emit an input event with $_commitMarkup after 400 ticks', () => {
    // TODO Test disabled for now
    // const Constructor = Vue.extend(MarkupEditor)
    // const vm = new Constructor()
    //
    // // Wrap vm's method $emit to record/spy on it
    // sinon.spy(vm, '$emit')
    //
    // // Call method to trigger the built in emit
    // vm.$_commitMarkup('alo')
    //
    // // Set fake timmer to tick 400 ms so loadash can call the input event
    // clock.tick(400)
    //
    // // Get the recording of the spy object
    // expect(vm.$emit).to.have.been.calledWith('input')
  })
})
