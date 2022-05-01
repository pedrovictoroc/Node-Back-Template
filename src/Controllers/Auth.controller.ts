import { Router, Request, Response } from 'express'

import { ServiceUoW } from '../Service/ServiceUoW'

export class AuthController {

    private prefixPath: string = "/auth"
    private router: Router
    private serviceUoW: ServiceUoW

    constructor(){
        this.serviceUoW = new ServiceUoW()
        this.router = Router();
    }
 
    public getRouter() {
        this.router.post(`${this.prefixPath}`, (request: Request, response: Response) => this.login(request, response));

        return this.router
    }

    private login(request: Request, response: Response){
        this.serviceUoW.authService.validateCredentials(request, response)
    }
}