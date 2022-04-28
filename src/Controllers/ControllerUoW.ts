import { UserController } from './User.controller'
import { AuthController } from './Auth.controller'

export class ControllerUoW{

    private controllers: any = []

    constructor(){
        this.controllers = [
            new AuthController(),
            new UserController()
        ]
    }

    public getControllers(){
        return this.controllers
    }
}