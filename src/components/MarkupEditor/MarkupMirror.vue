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
    :options="editorOptions">
  </codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'

export default {
  name: 'MarkupMirror',

  components: {
    codemirror
  },

  data () {
    return {
      editorOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/x-markdown',
        theme: 'solarized light',
        lineNumbers: true,
        line: true,
        highlightFormatting: true,
        fencedCodeBlockHighlighting: true
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
