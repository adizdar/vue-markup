/**
 * This component is repsonsible for creating the dropdown menu
 * and handling the dropdown events.
 *
 * @dependencies {ExportService: @/services/ExportService}
 * @dependencies {triggerFileDownloadViaBrowser: @/util/triggerFileDownload}
 */
<template lang="html">
  <div class="vmd-dropdown--container">
    <!-- Dropdown Trigger -->
    <a
      class='dropdown-button btn'
      href='#'
      data-activates='dropdown_settings'>
      <i class="material-icons large">more_vert</i>
    </a>

    <!-- Dropdown Structure -->
    <ul id='dropdown_settings' class='dropdown-content'>
      <li><a @click="downloadAsHTML">Download as HTML</a></li>
      <li><a @click="downloadAsPDF">Download as PDF</a></li>
      <li><a @click="downloadAsMarkdown">Download as Markdown</a></li>
    </ul>
  </div>
</template>

<script>
import ExportService from '@/services/ExportService'
import triggerFileDownloadViaBrowser from '@/util/triggerFileDownload'

export default {
  name: 'dropdownExportSettings',

  props: {
    dataAsHtml: {
      type: String,
      required: false
    },
    dataAsMarkdown: {
      type: String,
      required: false
    }
  },

  methods: {
    downloadAsPDF () {
      ExportService
        .asPDF({
          html: this.dataAsHtml,
          filename: 'teete',
          options: { responseType: 'blob' }
        })
        .then(function (response) {
          // Tempory solution, better is to save in the temp folder
          const headers = response.headers
          const blob = new Blob([ response.data ], { type: headers['content-type'] })
          const filename = response.headers['Content-Disposition']
            ? response.headers['Content-Disposition'].split('filename=')[1]
            : `${(new Date()).getTime()}.pdf`

          triggerFileDownloadViaBrowser(blob, filename)
        })
        .catch(function (error) { console.error(error) })
    },

    downloadAsHTML () {
      ExportService
        .asHTML({
          html: this.dataAsHtml,
          filename: 'teete'
          // options: { responseType: 'blob' }
        })
        .then(function (response) {
          // Tempory solution, better is to save in the temp folder
          const headers = response.headers
          const blob = new Blob([ response.data ], { type: headers['content-type'] })
          const filename = response.headers['Content-Disposition']
            ? response.headers['Content-Disposition'].split('filename=')[1]
            : `${(new Date()).getTime()}.html`

          triggerFileDownloadViaBrowser(blob, filename)
        })
        .catch(function (error) { console.error(error) })
    },

    downloadAsMarkdown () {
      ExportService
        .asMarkdown({
          markdown: this.dataAsMarkdown,
          filename: 'teete',
          options: { responseType: 'blob' }
        })
        .then(function (response) {
          // Tempory solution, better is to save in the temp folder
          const headers = response.headers
          const blob = new Blob([ response.data ], { type: headers['content-type'] })
          const filename = response.headers['Content-Disposition']
            ? response.headers['Content-Disposition'].split('filename=')[1]
            : `${(new Date()).getTime()}.md`

          triggerFileDownloadViaBrowser(blob, filename)
        })
        .catch(function (error) { console.error(error) })
    }
  }
}
</script>

<style lang="css" scoped>
  .vmd-dropdown--container .btn {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    color: black;
    padding: 0.4rem 0.8rem;
  }

  .vmd-dropdown--container .btn i {
    font-size: 1.8rem;
  }

  .vmd-dropdown--container .dropdown-content > li > a {
    color: #37474f;
  }
</style>
