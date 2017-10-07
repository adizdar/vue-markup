<template>
  <div>
    <markupEditor v-model="fromMarkupEditor"> </markupEditor>
    <HTMLPreview :content="convertMarkupEditorData" class="markdown-body"></HTMLPreview>
    <button
      type="button"
      @click="passMarkup"
      name="commitButton"
      class="vmd-commit-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Commit
    </button>
  </div>
</template>

<script type="text/babel">
import HTMLPreview from '@/components/HTMLPreview/HTMLPreview'
import MarkupEditor from '@/components/MarkupEditor/MarkupEditor'
import showdown from 'showdown'

const converter = new showdown.Converter()

export default {
  name: 'editor',

  data () {
    return {
      fromMarkupEditor: '',
      toHTMLPreview: ''
    }
  },

  components: {
    HTMLPreview, // alias for HTMLPreview: HTMLPreview
    MarkupEditor
  },

  computed: {
    convertMarkupEditorData () {
      return converter.makeHtml(this.fromMarkupEditor)
    }
  },

  methods: {
    passMarkup () {
      // TODO leave it like this to see if the convert schould be triggered via
      // TODO button

      // We are creating a bridge between the two Components,
      // so the data will be updated only on the button click
      // this.toHTMLPreview = this.fromMarkupEditor
    }
  }
}
</script>

<style scoped>
  .vmd-content-preview {

  }
</style>
