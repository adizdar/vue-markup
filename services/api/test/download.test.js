import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import logger from '../server/common/logger';

const expect = chai.expect;

describe('Download content controller', () => {
  it('should convert html to pdf', () =>
    request(Server)
      .post('/api/v1/download/aspdf')
      .send({ html: '<h1>Hello</h1>' })
      .expect(200)
      .then(res => {
        expect(Buffer.isBuffer(res.body))
          .to.equal(true);
      })
      .catch(err => {
        throw err;
      }));

  it('bad response by missing html param in aspdf', () =>
    request(Server)
      .post('/api/v1/download/aspdf')
      .send({ test: '<h1>Hello</h1>' })
      .expect(400));

  it('should return HTML', () =>
    request(Server)
      .post('/api/v1/download/ashtml')
      .send({ html: '<h1>Hello</h1>' })
      .expect('Content-type', 'text/html; charset=utf-8')
      .expect(200));

  it('should return Markdown', () =>
    request(Server)
      .post('/api/v1/download/asmarkdown')
      .send({ markdown: '## Hello' })
      .expect('Content-type', 'text/markdown; charset=utf-8')
      .expect(200));
});
