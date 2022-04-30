import { AddressService } from './Address.service'
import { ClientService } from './Client.service'

export class ServiceUoW {

    public clientService: ClientService
    public addressService: AddressService

    constructor(){
        this.clientService = new ClientService()
        this.addressService = new AddressService()
    }

}