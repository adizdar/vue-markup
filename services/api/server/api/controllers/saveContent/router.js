import * as express from 'express';
import Save from './controller';

export default express
  .Router()
  .post('/ashtml', Save.asHTML)
  .post('/asmarkdown', Save.asMarkdown)
  .post('/aspdf', Save.asPDF);
