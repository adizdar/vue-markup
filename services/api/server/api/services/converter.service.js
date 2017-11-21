import phantomHtmlToPdfInit from 'phantom-html-to-pdf';

const phantomHtmlToPdfConverter = phantomHtmlToPdfInit();

// Export part
class ConverterService {
  constructor(htmlToPdfConverter) {
    this.convertHtmlToPdf = htmlToPdfConverter;
  }

  getPdfStreamFromHtml(html) {
    return new Promise((resolve, reject) => {
      this.convertHtmlToPdf({ html }, (err, pdf) => {
        if (err) {
          reject(err);
        } else {
          resolve(pdf.stream);
        }
      });
    });
  }
}

export default new ConverterService(phantomHtmlToPdfConverter);
