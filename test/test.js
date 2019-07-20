const { describe, it } = require('mocha')
const chai = require('chai')
const request = require('supertest')

const app = require('../server')
const backend = request.agent('http://localhost:5000')

const expect = chai.expect
const should = chai.should()

// Testing /registrera
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
    it('Should respond with error 400 if the email is not an email', done => {
        backend
        .post('/registrera')
        .send({
            'name': 'test',
            'email': 'testmail.com',
            'password': '1234567',
            'password2': '1234567'
        })
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(400)
            expect(res.body.email).to.equal('Email är ogiltig')
            done()
        })
    })
    it('Should respond with error 400 if the email already exists', done => {
        backend
        .post('/registrera')
        .send({
            'name': 'test',
            'email': 'test@mail.com',
            'password': '1234567',
            'password2': '1234567'
        })
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(400)
            expect(res.body.email).to.equal('Emailen är redan registrerad')
            done()
        })
    })
    it('Should respond with error 400 if the password has less than 7 characters', done => {
        backend
        .post('/registrera')
        .send({
            'name': 'test',
            'email': 'test@mail.com',
            'password': '123456',
            'password2': '123456'
        })
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(400)
            expect(res.body.password).to.equal('Lösenordet måste vara minst 7 karaktärer')
            done()
        })
    })
    it('should add the user to the database', done => {
        backend
        .post('/registrera')
        .send({
            'name': 'test2',
            'email': 'test2@mail.com',
            'password': 'abc1234',
            'password2': 'abc1234'
        })
        .set('Accept', 'application/json')
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(200)
            expect(res.body.name).to.equal('test2')
            expect(res.body.email).to.equal('test2@mail.com')
            done()
        })
    })
})
// Testing /loggain
describe('POST /loggain', function () {
    it('Should respond with error 400 if not all fields are filled', done => {
        backend
        .post('/loggain', {})
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(400)
            done()
        })
    })
    it('Should respond with error 404 if the email is not found', done => {
        backend
        .post('/loggain')
        .send({
            'name': 'test',
            'email': 'test1@mail.com',
            'password': '1234567',
            'password2': '1234567'
        })
        .end(function (err, res) {
        if (err) throw err
        expect(res.status).to.equal(404)
        expect(res.body.emailnotfound).to.equal('Angiven mailadress och lösenord matchar inte. Försök igen.')
        done()
        })
    })
    it('Should respond with error 400 if the email or the password is incorrect', done => {
        backend
        .post('/loggain')
        .send({
            'name': 'test',
            'email': 'test@mail.com',
            'password': '123456',
            'password2': '123456'
        })
        .end(function (err, res) {
        if (err) throw err
        expect(res.status).to.equal(400)
        expect(res.body.passwordincorrect).to.equal('Angiven mailadress och lösenord matchar inte. Försök igen.')
        done()
        })
    })
    it('should sign in the user', done => {
        backend
        .post('/loggain')
        .send({
            'name': 'test',
            'email': 'test@mail.com',
            'password': '1234567',
            'password2': '1234567'
        })
        .end(function (err, res) {
            if (err) throw err
            expect(res.status).to.equal(200)
            done()
        })
    })
})
