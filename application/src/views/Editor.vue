<template>
  <div class="vmd-editor--container">
    <dropdownExportSettings
      class="vmd-settings"
    </dropdownExportSettings>
    <markupEditor
      class="vmd-editor vmd-editor--markup"
      v-model="fromMarkdownEditor">
    </markupEditor>
    <HTMLPreview
      class="markdown-body vmd-editor vmd-editor--preview"
      :content="convertMarkupEditorData">
    </HTMLPreview>
    <!--
    // TODO leave it like this to see if the convert schould be triggered via
    // TODO button
    <button
      type="button"
      @click="passMarkup"
      name="commitButton"
      class="vmd-commit-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Commit
    </button> -->
  </div>
</template>

<script type="text/babel">
import DropdownExportSettings from '@/components/DropdownExportSettings/DropdownExportSettings'
import HTMLPreview from '@/components/HTMLPreview/HTMLPreview'
import MarkupEditor from '@/components/MarkupEditor/MarkupEditor'
import converter from '@/util/markdownToHTMLConverter'
import defaultEditorData from '@/assets/markdown-default-data'

export default {
  name: 'editor',

  data () {
    return {
      toHTMLPreview: ''
      fromMarkdownEditor: defaultEditorData,
    }
  },

  components: {
    DropdownExportSettings,
    HTMLPreview,
    MarkupEditor
  },

  computed: {
    convertMarkupEditorData () {
      return converter(this.fromMarkdownEditor)
    }
  },

  methods: {
    passMarkup () {
      // TODO leave it like this to see if the convert schould be triggered via
      // TODO button

      // We are creating a bridge between the two Components,
      // so the data will be updated only on the button click
      // this.toHTMLPreview = this.fromMarkdownEditor
    }
  }
}
</script>

<style scoped>
  .vmd-settings {
      position: fixed;
      z-index: 10;
      right: 0;
  }

  .vmd-editor {
    position: fixed;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }

  .vmd-editor--preview {
    left: 50%;
    padding: 1rem;
    padding-left: 1.2rem;
  }

  .markdown-body >>> [type="checkbox"] {
    opacity: 1;
    position: inherit;
  }

  .vmd-editor--markup {
    border-right: 2px solid #E8E8E8;
    left: 0;
    width: 50%;
    height: auto;
  }

  /**
   * @Override
   */
  .vmd-editor--markup >>> .CodeMirror {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 1rem;
    height: auto;
    width: auto;
  }

  /**
   * @Override
   */
  .vmd-editor--markup >>> .CodeMirror-scroll {
    position: relative;
    overflow: auto;
    height: 100%;
    outline: none;
 }
</style>
