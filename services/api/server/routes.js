import htmpToPdfRouter from './api/controllers/downloadContent/router';

export default function routes(app) {
  app.use('/api/v1/download', htmpToPdfRouter);
}
