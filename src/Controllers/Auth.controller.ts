import { Router, Request, Response } from 'express'
import { Service } from '../service'
import { setApiResponse } from '../Handlers/ApiResponse.handler'

export class AuthController {

    prefixPath: string = "/auth"
    service: Service
    router: Router

    constructor(){
        this.service = new Service()
        this.router = Router();
        this.initializeRoutes()
    }
 
    public initializeRoutes() {
        this.router.get(`${this.prefixPath}`, this.login);
    }

    login(request: Request, response: Response){
        const result: string[] = []

        result.push("teste")
    
        response.json(setApiResponse<string[]>(result))
    }
}