/**
 * This component is responsible to render dynamcly html via the v-html directive.
 * The communication goes via props.
 *
 * [HTMLPreview html renderer]
 * @props content { @type String }
 */
<template>
    <div v-html="content">
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


  computed: {
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
