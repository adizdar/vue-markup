import ConvertService from '../../services/converter.service';
import logger from '../../../common/logger';

// Private part

/**
 * Set content type header and disposition header.
 * It is mainly used in combination with content download.
 *
 * @param { function } callback
 * @param { string } type
 * @param { string } disposition
 */
function setContentTypeWithDispositionHeader(callback, type, disposition) {
  callback.call(this, 'Content-type', type);
  callback.call(this, 'Content-disposition', disposition);
}

// Export part

class DownloadContentController {
  asPDF(req, res) {
    const html = req.body.html;

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    ConvertService.getPdfStreamFromHtml(html)
      .then(stream => {
        res.status(201).setHeader('Content-type', 'application/pdf');
        stream.pipe(res);
      })
      .catch(err => {
        res.status(500).send(`A Error occured while converting: ${err}`);
      });
  }

  asHTML(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    setContentTypeWithDispositionHeader.call(
      res,
      res.setHeader,
      'text/html; charset=UTF-8',
      `attachment; filename=${filename}.html`,
    );

    // res.setHeader('Content-type', 'text/html; charset=UTF-8');
    // res.setHeader('Content-disposition', `attachment; filename=${filename}.html`);

    res.download(__dirname, `${filename}.html`, () => {
      res.status(201).send(html);
    });
  }

  asMarkdown(req, res) {
    const markdown = req.body.markdown;
    const filename = req.body.filename || Date.now();

    if (!markdown) {
      res.status(400).send('No markdown as param send.');
    }

    setContentTypeWithDispositionHeader.call(
      res,
      res.setHeader,
      'text/markdown; charset=UTF-8',
      `attachment; filename=${filename}.md`,
    );

    // res.setHeader('Content-type', 'text/markdown; charset=UTF-8');
    // res.setHeader('Content-disposition', `attachment; filename=${filename}.md`);

    res.download(__dirname, `${filename}.md`, () => {
      res.status(201).send(markdown);
    });
  }
}

export default new DownloadContentController();

