import { ClientRepository } from "./Client.repository";

export class RepositoryUoW {

    clientRepository: ClientRepository

    constructor(){
        this.clientRepository = new ClientRepository()
    }
}