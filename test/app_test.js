const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe ("The express app", () => {
	it ('handles a get request to /api', (done) => {
		request(app) //supertest
			.get('/api')
			.end((err, response) => {
				assert(response.body.hello === "world");
				done();
			});
	});
});