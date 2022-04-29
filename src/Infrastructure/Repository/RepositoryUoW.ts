import { AddressRepository } from "./Address.repository";
import { ClientRepository } from "./Client.repository";

export class RepositoryUoW {

    clientRepository: ClientRepository
    addressRepository: AddressRepository

    constructor(){
        this.clientRepository = new ClientRepository()
        this.addressRepository = new AddressRepository()
    }
}