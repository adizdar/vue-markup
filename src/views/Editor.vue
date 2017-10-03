<template>
  <div>
    <markupEditor v-model="fromMarkupEditor"> </markupEditor>
    <HTMLPreview :content="fromMarkupEditor"></HTMLPreview>
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

  },

  methods: {
    passMarkup () {
      // We are creating a bridge between the two Components,
      // so the data will be updated only on the button click
      this.toHTMLPreview = this.fromMarkupEditor
    }
  }
}
</script>

<style scoped>
  .vmd-content-preview {

  }
</style>
