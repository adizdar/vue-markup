import os from 'os';
import filesystem from 'fs';
import ConvertService from '../../services/converter.service';
import logger from '../../../common/logger';

/**
 * Tempory directory path.
 */
const TEMP_DIR_PATH = os.tmpdir();

/**
 * Manages the saving of the content and providing the save url so it can be
 * managed by the client.
 */
class SaveContentController {
  /**
   * Save data as PDF file.
   *
   * @param  {object} req
   * @param  {object} res
   */
  asPDF(req, res) {
    const html = req.body.html;
    if (!html) {
      res.status(400).send('No html as param send.');
    }

    const filename = req.body.filename || Date.now();
    const path = `${(req.body.path || TEMP_DIR_PATH)}/${filename}.pdf`;

    ConvertService.getPdfStreamFromHtml(html)
      .then(stream => {
        const output = filesystem.createWriteStream(path);

        if (!output.writable) {
          res.status(403).send(`The temp direcori is not writable ${path}`);
        }

        res.setHeader('Content-type', 'text/plain');

        stream.pipe(output);
        res.status(201).send(path);
      })
      .catch(err => {
        res.status(500).send(`A Error occured while converting: ${err}`);
      });
  }


  /**
   * Save data as HTML file.
   *
   * @param  {object} req
   * @param  {object} res
   */
  asHTML(req, res) {
    const html = req.body.html;
    if (!html) {
      res.status(400).send('No html as param send.');
    }

    const filename = req.body.filename || Date.now();
    const path = `${(req.body.path || TEMP_DIR_PATH)}/${filename}.pdf`;

    res.setHeader('Content-type', 'text/plain');

    res.download(path, `${filename}.html`, () => {
      res.status(201).send(html);
    });
  }

  /**
   * Save data as Markdown file.
   *
   * @param {object} req
   * @param {object} res
   */
  asMarkdown(req, res) {
    const markdown = req.body.markdown;
    if (!markdown) {
      res.status(400).send('No markdown as param send.');
    }

    const filename = req.body.filename || Date.now();
    const path = `${(req.body.path || TEMP_DIR_PATH)}/${filename}.pdf`;

    res.setHeader('Content-type', 'text/plain');

    res.download(path, `${filename}.md`, () => {
      res.status(201).send(markdown);
    });
  }
}

export default new SaveContentController();

