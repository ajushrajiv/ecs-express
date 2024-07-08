const server = require('./index.js'); 
const request = require('supertest');

//npx jest --detectOpenHandles----> checks if any connection is still open
//close the connection after the test is completed
afterAll(done => {
    server.close(done);
});

describe('GET /', () => {
    it('responds with Hello World!', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});