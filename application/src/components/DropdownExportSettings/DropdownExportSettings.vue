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

const createBlob = (contentType, data) => (
  new Blob([ data ], { type: contentType })
)

const getFileNameFromContentDisposition = (contentDisposition) => (
  contentDisposition
    ? contentDisposition.split('filename=')[1]
    : ''
)

const getDataAsBlobWithFileName = (contentType, contentDisposition, data) => ({
  blob: createBlob(contentType, data),
  filename: getFileNameFromContentDisposition(contentDisposition) || `${(new Date()).getTime()}`
})

export default {
  name: 'dropdownExportSettings',

  props: {
    dataAsHtml: {
      type: String,
      required: true
    },
    dataAsMarkdown: {
      type: String,
      required: true
    }
  },

  methods: {
    downloadAsPDF () {
      // Tempory solution, better to use `save` api
      ExportService
        .asPDF({
          html: this.dataAsHtml,
          filename: 'teete',
          options: { responseType: 'blob' }
        })
        .then(function (response) {
          const { blob, filename } = getDataAsBlobWithFileName(
            response.headers['content-type'],
            response.headers['content-disposition'],
            response.data
          )

          triggerFileDownloadViaBrowser(blob, filename + '.pdf')
        })
        .catch(function (error) { console.error(error) })
    },

    downloadAsHTML () {
      const { blob, filename } = getDataAsBlobWithFileName(
        'text/html; charset=UTF-8',
        null,
        this.dataAsHtml
      )

      triggerFileDownloadViaBrowser(blob, filename + '.html')
    },

    downloadAsMarkdown () {
      const { blob, filename } = getDataAsBlobWithFileName(
        'text/markdown; charset=UTF-8',
        null,
        this.dataAsMarkdown
      )

      triggerFileDownloadViaBrowser(blob, filename + '.md')
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
