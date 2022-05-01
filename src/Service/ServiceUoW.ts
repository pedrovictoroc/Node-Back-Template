import { AddressService } from './Address.service'
import { AuthService } from './Auth.service'
import { ClientService } from './Client.service'

export class ServiceUoW {

    public authService: AuthService
    public clientService: ClientService
    public addressService: AddressService

    constructor(){
        this.authService = new AuthService()
        this.clientService = new ClientService()
        this.addressService = new AddressService()
    }

}