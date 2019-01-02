const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe ("Top level application test", () => {
	it ('handles a get request to /api', (done) => {
		request(app) //supertest
			.get('/api')
			.end((err, response) => {
				assert(response.body.hello === "world");
				done();
			});
	});
});