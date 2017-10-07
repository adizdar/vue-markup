
/**
 * This component is repsonsible to handle the markup context.
 * Every parent can access the data via the v-model attribute.
 *
 * More info here:
 * https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events
 *
 * [MarkupMirror codemirror editor]
 * @dependencies {MarkupMirror: @/components/MarkupEditor/MarkupMirror}
 * @dependencies {lodash}
 */
<template>
    <MarkupMirror
    @input="$_commitMarkup">
    </MarkupMirror>
</template>

<script type="text/babel">
import MarkupMirror from '@/components/MarkupEditor/MarkupMirror'
import lodash from 'lodash'

export default {
  name: 'markupEditor',

  components: {
    MarkupMirror
  },

  data () {
    return {}
  },

  methods: {
    $_commitMarkup: lodash.debounce(function (markup) {
      this.$emit('input', markup)
    }, 300)
  }
}
</script>

<style scoped>
.vmd-markup-editor-textarea {
}
</style>
