import Vue from 'vue'

/**
 * Helper function that mounts and returns the rendered text
 *
 * @param  {[Vue.Component]} Component [The Component to be mount.]
 * @param  {[Object]} propsData [The props object defined in the Component.]
 * @return {[String]}
 */
export function getRenderedText (Component, propsData) {
  const vm = constructComponentWithPropsData(Component, propsData)

  return vm.$el.textContent
}

/**
 * Creates a new component instance with props data.
 *
 * @param  {[Vue.Component]} Component [The Component to be mount.]
 * @param  {[Object]} propsData [The props object defined in the Component.]
 * @return {[Vue.Component]}
 */
export const mountPropsToComponent = (Component, propsData) => {
  return constructComponentWithPropsData(Component, propsData)
}

/**
 * [status private]
 * Creates a component with default props data
 *
 * @param  {[Vue.Component]} Component [The Component to be mount.]
 * @param  {[Object]} propsData [The props object defined in the Component.]
 * @return {[Vue.Component]}
 */
function constructComponentWithPropsData (Component, propsData) {
  const Constructor = Vue.extend(Component)

  return new Constructor({propsData: propsData}).$mount()
}
