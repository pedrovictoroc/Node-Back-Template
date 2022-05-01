import request from 'supertest'
import { sign } from 'jsonwebtoken'
import { Server } from '../../server'
import { ClientService } from '../../Service/Client.service'
import { PostClient } from '../../Interfaces/Post/PostClient.interface'

describe(`#${ClientService.name} - Test site for API response`, () => {

    const server = new Server().getServer()
    const basePath = "/client"

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test(`${ClientService.prototype.getAll} should return 200 if have clients in the base`, async () => {
        
        const token = sign({id: ""}, "teste", {expiresIn: 3000})
        const response = await request(server)
        .get(`${basePath}`)
        .set({'authorization': token})
        
        expect(response.status).toBe(200)
        expect(response.body.data.length).toBeGreaterThanOrEqual(1)
    })

    test(`${ClientService.prototype.getById} should return 200 if have clients with the specified ID`, async () => {
        

        const token = sign({id: ""}, "teste", {expiresIn: 3000})
        const response = await request(server)
        .get(`${basePath}/1`)
        .set({'authorization': token})
        
        
        expect(response.status).toBe(200)
        expect(response.body.data.length).toBe(1)
    })

    test(`${ClientService.prototype.getById} should return 404 if have clients with the specified ID`, async () => {
        

        const token = sign({id: ""}, "teste", {expiresIn: 3000})
        const response = await request(server)
        .get(`${basePath}/100000`)
        .set({'authorization': token})
        
        
        expect(response.status).toBe(404)
        expect(response.body.data.length).toBe(0)
    })

    test(`${ClientService.prototype.create} should return 200 if the client was created successfully`, async () => {
        const toBeCreatedClient: PostClient = {
            name: "teste",
            socialName: "teste",
            email: "teste@teste.com",
            document: "99999999910",
            password: "teste",
            addresses: [
                {
                    country: "brasil",
                    state: "ceara",
                    city: "fortaleza",
                    street: "teste",
                    code: "0000000",
                    number: "123",
                    complement: ""
                }
            ]

        }

        const token = sign({id: ""}, "teste", {expiresIn: 3000})
        const response = await request(server)
        .post(`${basePath}`)
        .set({'authorization': token})
        .send(toBeCreatedClient)
        
        expect(response.status).toBe(200)
        expect(response.body.data.length).toBe(1)
    })

    test(`${ClientService.prototype.update} should return 200 if the client was updated successfully`, async () => {
        const toBeCreatedClient: PostClient = {
            name: "teste",
            socialName: "teste",
            email: "teste@teste.com",
            document: "99999999997",
            password: "teste",
            addresses: [
                {
                    country: "brasil",
                    state: "ceara",
                    city: "fortaleza",
                    street: "teste",
                    code: "0000000",
                    number: "123",
                    complement: ""
                }
            ]

        }

        const token = sign({id: ""}, "teste", {expiresIn: 3000})
        const response = await request(server)
        .put(`${basePath}/1`)
        .set({'authorization': token})
        .send(toBeCreatedClient)
        
        expect(response.status).toBe(200)
        expect(response.body.data.length).toBe(1)
    })

    test(`${ClientService.prototype.delete} should return 200 if the client was deleted successfully`, async () => {
        const token = sign({id: ""}, "teste", {expiresIn: 3000})
        const response = await request(server)
        .delete(`${basePath}/1`)
        .set({'authorization': token})
        
        expect(response.status).toBe(200)
        expect(response.body.data.length).toBe(0)
    })

})
