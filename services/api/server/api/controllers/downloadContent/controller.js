import ConvertService from '../../services/converter.service';
// import logger from '../../../common/logger';

/**
 * Set content type header and disposition header.
 * It is mainly used in combination with content download.
 *
 * @param { function } callback
 * @param { string } type
 * @param { string } disposition
 */
function setContentTypeWithDispositionHeader(callback, type, disposition) {
  callback.call(this, 'Content-disposition', disposition);
  callback.call(this, 'Content-type', type);
}

/**
 * Sends the raw content as response so the client can handle the state.
 */
class DownloadContentController {
  /**
   * Convert html to pdf and return the raw pdf.
   *
   * @param {object} req
   * @param {object} res
   */
  asPDF(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    ConvertService.getPdfStreamFromHtml(html)
      .then(stream => {
        setContentTypeWithDispositionHeader.call(
          res,
          res.setHeader,
          'application/pdf;',
          `attachment; filename=${filename}.pdf`,
        );

        stream.pipe(res);
      })
      .catch(err => {
        res.status(500).send(`A Error occured while converting: ${err}`);
      });
  }

  /**
   * TODO this method doesn't make sense the client can download the html.
   * TODO but leave it if we decide to do some styling.
   *
   * @param {object} req
   * @param {object} res
   */
  asHTML(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    setContentTypeWithDispositionHeader.call(
      res,
      res.setHeader,
      'text/html; charset=utf-8',
      `attachment; filename=${filename}.html`,
    );

    res.status(200).send(html);
  }

  /**
   * TODO this method doesn't make sense the client can download the markdown.
   * TODO but leave it if we decide to do some styling.
   *
   * @param {object} req
   * @param {object} res
   */
  asMarkdown(req, res) {
    const markdown = req.body.markdown;
    const filename = req.body.filename || Date.now();

    if (!markdown) {
      res.status(400).send('No markdown as param send.');
    }

    setContentTypeWithDispositionHeader.call(
      res,
      res.setHeader,
      'text/markdown; charset=utf-8',
      `attachment; filename=${filename}.md`,
    );

    res.status(200).send(markdown);
  }
}

export default new DownloadContentController();

