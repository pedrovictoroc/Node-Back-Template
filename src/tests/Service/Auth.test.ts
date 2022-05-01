import { GetAuth } from '../../Interfaces/Get/Auth.interface'
import { Server } from '../../server'
import request from 'supertest'
import { AuthService } from '../../Service/Auth.service'

describe(`#${AuthService.name} - Test site for API response`, () => {

    const server = new Server().getServer()
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test(`${AuthService.prototype.validateCredentials} should return 401 if credentials not valid`, async () => {
        const credentials: GetAuth = {
            document: "",
            password: ""
        }

        const response = await request(server)
        .post("/auth")
        .send(credentials)

        expect(response.status).toBe(401)
        expect(response.body.data.length).toBe(0)
    })

    test(`${AuthService.prototype.validateCredentials} should return JWT token if credentials are valid`, async () => {
        const credentials: GetAuth = {
            document: "00000000000",
            password: "teste"
        }

        const response = await request(server)
        .post("/auth")
        .send(credentials)

        expect(response.status).toBe(200)
        expect(response.body.data.length).toBeGreaterThan(0)
        expect(typeof response.body.data[0]).toBe('string')
    })

})