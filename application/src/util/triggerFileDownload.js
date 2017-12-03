
/**
 * Create's <a> tag to trigger download via Browser,
 * so the data is saved in the user's default download location.
 *
 * @param { object } data
 * @param { string } filename
 */
export default function triggerFileDownloadViaBrowser (data, filename) {
  if (!data || !filename) {
    throw new Error(`Undefined values recived data: ${data}, filename: ${filename}`)
  }

  const createHyperlinkTag = document.createElement('a')

  createHyperlinkTag.href = window.URL.createObjectURL(data)
  createHyperlinkTag.download = filename

  createHyperlinkTag.click()
}
