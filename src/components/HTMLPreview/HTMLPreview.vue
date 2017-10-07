/**
 * This component is responsible to render dynamcly html via the v-html directive.
 * The communication goes via props.
 *
 * [HTMLPreview html renderer]
 * @props content { @type String }
 */
<template>
  <div class="vmd-content-preview">
    <div v-html="parsedHtml"></div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'HTMLPreview',

  props: {
    content: {
      type: String,
      required: false
    }
  },

  data () {
    return {}
  },

  computed: {
    parsedHtml () {
      return this.content
    }
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
