const app = require('./server').app;
const request = require('supertest');

it('testing express first api', (done) => {
    request(app)
    .get('/test')
    .expect({
        title: 'test',
        content:'test content'
    })
    .end(done);
})