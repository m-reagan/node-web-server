const app = require('./server').app;
const request = require('supertest');
const expect = require('expect');

it('testing express first api', (done) => {
    request(app)
    .get('/test')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({title:'test', content:'test content'})
    })
    .end(done);
});
