import { ClientRepository } from "../../Infrastructure/Repository/Client.repository";
import { Database } from '../../Infrastructure/Database'

describe(`${ClientRepository.name} - Test site for API response`, () => {
    const client = new Database().getClient()
    const clientRepository = new ClientRepository(client)

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test(`${ClientRepository.name} - should have an QueryHandler`, () =>{
        expect(clientRepository.queryHandler).not.toBe(null)
    })

})