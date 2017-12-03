import htmlToPdfRouter from './api/controllers/downloadContent/router';

const URL_PATH = '/api';
const VERSION_ONE = '/v1';

export default function routes(app) {
  app.use(`${URL_PATH + VERSION_ONE}/download`, htmlToPdfRouter);
}
