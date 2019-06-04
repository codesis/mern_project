const { describe, it } = require('mocha')
const chai = require('chai')
const request = require('supertest')

const app = require('../server')
const backend = request.agent('http://localhost:5000')

const expect = chai.expect
const should = chai.should()

describe('POST /registera', function () {
    it('Should respond with error 400 if not all fields are filled', done => {
        backend
        .post('/registrera', {})
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(400)
            done()
        })
    })
    it('Should respond with error 400 if email is not an email', done => {
        backend
        .post('/registrera')
        .send({
            'name': 'test',
            'email': 'testmail.com',
            'password': '123456'
        })
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(400)
            done()
        })
    })
})