import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import logger from '../server/common/logger';

const expect = chai.expect;

describe('Save content controller', () => {
  it('save PDF', () =>
    request(Server)
      .post('/api/v1/save/aspdf')
      .send({ html: '<h1>Hello</h1>' })
      .expect(201)
      .then(res => {
        expect(res.text).to.be.a('string');
      })
      .catch(err => {
        throw err;
      }));
});
