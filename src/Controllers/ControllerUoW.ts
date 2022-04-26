import { UserController } from './User.controller'

export class ControllerUoW{

    private controllers: any = []

    constructor(){
        this.controllers = [
            new UserController()
        ]
    }

    public getControllers(){
        return this.controllers
    }
}