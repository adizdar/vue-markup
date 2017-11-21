import chai from 'chai';
import request from 'supertest';
import Server from '../server';
// import logger from '../server/common/logger';

const expect = chai.expect;

describe('Converter', () => {
  it('should convert html', () => {
    request(Server)
      .post('/api/v1/converter/topdf')
      .send({ html: '<h1>Hello</h1>' })
      .expect('Content-Type', 'application/pdf')
      .expect(200);
  });
});
