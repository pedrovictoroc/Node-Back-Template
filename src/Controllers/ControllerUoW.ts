import { ClientController } from './Client.controller'
import { AuthController } from './Auth.controller'

export class ControllerUoW{

    private controllers: any = []

    constructor(){
        this.controllers = [
            new AuthController(),
            new ClientController()
        ]
    }

    public getControllers(){
        return this.controllers
    }
}