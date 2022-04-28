import { ClientService } from './Client.service'

export class ServiceUoW {

    public clientService: ClientService

    constructor(){
        this.clientService = new ClientService()
    }

}