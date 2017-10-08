import Vue from 'vue'

/**
 * Helper function that mounts and returns the rendered text
 *
 * @param  {[Vue.Component]} Component [The Component to be mount.]
 * @param  {[Object]} propsData [The props object defined in the Component.]
 * @return {[String]}
 */
export function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()

  return vm.$el.textContent
}
