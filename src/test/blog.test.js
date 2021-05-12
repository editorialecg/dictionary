const app = require('../app')
const request = require('supertest')

describe('Test POST /blog/saveblog', () => {
    test('It should respond with code 400', async done => {
        const response = await request(app)
            .post('/blog/saveblog')
            .send({})
        expect(response.statusCode).toBe(400)
        done()
    })

    test('It should respond with code 401', async done => {
        const response = await request(app)
            .post('/blog/saveblog')
            .send({
                title: 'Test Title',
                content: 'Test Content'
            })
        expect(response.statusCode).toBe(401)
        done()
    })
    
    test('It should respond with code 200', async done => {
        const response = await request(app)
            .post('/blog/saveblog')
            .send({
                title: 'Test Title',
                content: 'Test Content'
            })
        expect(response.statusCode).toBe(200)
        done()
    })
})