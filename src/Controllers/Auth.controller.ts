import { Router, Request, Response } from 'express'
import { setApiResponse } from '../ApiHandlers/ApiResponse.handler'

export class AuthController {

    private prefixPath: string = "/auth"
    private router: Router

    constructor(){
        this.router = Router();
    }
 
    public getRouter() {
        this.router.get(`${this.prefixPath}`, this.login);

        return this.router
    }

    private login(request: Request, response: Response){
    }
}