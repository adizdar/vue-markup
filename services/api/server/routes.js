import downloadContent from './api/controllers/downloadContent/router';
import saveContent from './api/controllers/saveContent/router';

const URL_PATH = '/api';
const VERSION_ONE = '/v1';

export default function routes(app) {
  app.use(`${URL_PATH + VERSION_ONE}/download`, downloadContent);
  app.use(`${URL_PATH + VERSION_ONE}/save`, saveContent);
}
