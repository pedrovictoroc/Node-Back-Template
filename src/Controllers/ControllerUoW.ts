import { ClientController } from './Client.controller'
import { AuthController } from './Auth.controller'
import { AddressController } from './Address.controller'

export class ControllerUoW{

    private controllers: any = []

    constructor(){
        this.controllers = [
            new AuthController(),
            new ClientController(),
            new AddressController()
        ]
    }

    public getControllers(){
        return this.controllers
    }
}