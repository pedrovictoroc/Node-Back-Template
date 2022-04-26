import { Router, Request, Response } from 'express'
import { Service } from '../service'
import { setApiResponse } from '../Handlers/ApiResponse.handler'

export class UserController {

    prefixPath: string = "/user"
    service: Service
    router: Router

    constructor(){
        this.service = new Service()
        this.router = Router();
        this.initializeRoutes()
    }
 
    public initializeRoutes() {
        this.router.get(`${this.prefixPath}`, this.getAll);
        this.router.get(`${this.prefixPath}/:id`, this.getById);
    }

    getAll(request: Request, response: Response){
        response.send("teste")
    }

    getById(request: Request, response: Response){
        const result: string[] = []

        result.push("teste")
    
        response.json(setApiResponse<string[]>(result))
    }
}