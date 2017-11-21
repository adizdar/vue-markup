import * as express from 'express';
import Download from './controller';

export default express
  .Router()
  .post('/ashtml', Download.asHTML)
  .post('/asmarkdown', Download.asMarkdown)
  .post('/aspdf', Download.asPDF);
