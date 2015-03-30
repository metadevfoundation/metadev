var app = require('../index.js');
var request = require('supertest').agent(app.listen());

describe('Quip Module', function () {

	describe('POST /create', function () {
		it('create a Quip Doc', function (done) {

			request.post('/create')
				.set('Content-Type', 'application/json')
				.send({
					title: 'Test Submission',
					content: 'I am the very Contact Form Test, Yo...'
				})
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);

					done();
				})
		});
	})
})
