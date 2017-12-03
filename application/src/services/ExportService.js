import axios from 'axios'

// TODO add dev and prod URL switcher
const BASE_URL = 'http://localhost:3090/api/v1/download'

/**
 * Class responsible for geting content for download/export via API.
 */
class ExportService {
  /**
   * @param {object} axios
   * @param {string} baseURL
   */
  constructor (axios, baseURL) {
    this.baseURL = baseURL
    this.http = axios
  }

  /**
   * Get PDF content.
   *
   * @param {object: string, string, object}
   */
  asPDF ({ html, filename = '', options = {} }) {
    return this.http.post(
      `${this.baseURL}/aspdf`,
      { html, filename },
      options
    )
  }

  /**
   * Get HTML content.
   *
   * @param {object: string, string, object}
   */
  asHTML ({ html, filename = '', options = {} }) {
    return this.http.post(
      `${this.baseURL}/ashtml`,
      { html, filename },
      options
    )
  }

  /**
   * Get MARKDOWN content.
   *
   * @param {object: string, string, object}
   */
  asMarkdown ({ markdown, filename = '', options = {} }) {
    return this.http.post(
      `${this.baseURL}/asmarkdown`,
      { markdown, filename },
      options
    )
  }
}

export default new ExportService(axios, BASE_URL)
