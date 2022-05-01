import { RepositoryUoW } from "../../Infrastructure/Repository/RepositoryUoW";

describe(`${RepositoryUoW.name} - Test site for API response`, () => {

    const repositoryUoW = new RepositoryUoW()

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test(`${RepositoryUoW.name} - should have an AuthRepository`, () =>{
        expect(repositoryUoW.authRepository).not.toBe(null)
    })

    test(`${RepositoryUoW.name} - should have an AddressRepository`, () =>{
        expect(repositoryUoW.addressRepository).not.toBe(null)
    })

    test(`${RepositoryUoW.name} - should have an ClientRepository`, () =>{
        expect(repositoryUoW.clientRepository).not.toBe(null)
    })
})