
/**
 * This component is repsonsible to format the markup context.
 * Every parent can access the data via the v-model attribute.
 *
 * More info here:
 * https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events
 *
 * [MarkupMirror codemirror editor]
 * @dependencies {MarkupMirror: @/components/MarkupEditor/MarkupMirror}
 */
<template>
    <MarkupMirror
    @input="$_commitMarkup">
    </MarkupMirror>
</template>

<script type="text/babel">
import MarkupMirror from '@/components/MarkupEditor/MarkupMirror'

export default {
  name: 'markupEditor',

  components: {
    MarkupMirror
  },

  data () {
    return {}
  },

  methods: {
    $_commitMarkup (markup) {
      this.$loadash.debounce((markup) => {
        this.$emit('input', markup)
      })
    }
  }
}
</script>

<style scoped>
.vmd-markup-editor-textarea {
}
</style>
