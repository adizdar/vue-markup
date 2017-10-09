/**
 * This component a modified codemirror extension adopted to work with Markup
 * content.
 *
 * The @change event emits a onInputChangeEvent event.
 *
 * [MarkupMirror a codemirror extension]
 * @dependencies vue-codemirror
 * @emit input -> onInputChange
 */
<template>
  <codemirror
    class="vmd-markup-editor-textarea"
    @change="onEditorCodeChange"
    :options="editorOptions"
    :value="value">
  </codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/gfm/gfm'

export default {
  name: 'MarkupMirror',

  components: {
    codemirror
  },

  props: {
    value: {
      type: String,
      required: false
    }
  },

  data () {
    return {
      editorOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'gfm', // Github flavor mode
        theme: 'default',
        lineNumbers: true,
        line: true,
        lineWrapping: true,
        fencedCodeBlockHighlighting: true,
        highlightFormatting: true
      }
    }
  },

  methods: {
    onEditorCodeChange (markup) {
      this.$emit('input', markup)
    }
  }
}
</script>

<style scoped>
</style>
