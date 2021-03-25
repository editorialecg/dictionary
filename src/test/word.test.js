const app = require('../app')
const request = require('supertest')

describe('Test POST /wordsynant/saveword', () => {
    test('POST /wordsynant/saveword respond with code 200', async done => {
        const response = await request(app)
            .post('/wordsynant/saveword')
            .send({
                word: 'Test',
                syn: ['Test 1','Test 2'],
                ant: ['Test 1', 'Test 2'],
                
            })
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
        done()
    })

    test('POST /wordsynant/saveword respond with code 400', async done => {
        const response = await request(app)
            .post('/wordsynant/saveword')
            .send({

            })
        expect(response.statusCode).toBe(400)
        done()
    })

    test('POST /wordsynant/saveword respond with code 401', async done => {
        const response = await request(app)
            .post('/wordsynant/saveword')
            .send({
                word: 'Test',
                syn: 'Test syn',
                ant: 'Test ant'
            })
        expect(response.statusCode).toBe(401)
        done()
    })
})

describe('Test GET /wordsynant/findword/:word', () => {
    test('GET /wordsynant/findword/:word respond with code 200', async done =>{
        const response = await request(app)
            .get('/wordsynant/findword/Test')
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
        done()

    })

    test('GET /wordsynant/findword respond with code 404', async done =>{
        const response = await request(app)
            .get('/wordsynant/findword/NOTEXIST')
        expect(response.statusCode).toBe(404)
        done()
    })
})