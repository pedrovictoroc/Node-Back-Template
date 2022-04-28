import { Router, Request, Response } from 'express'
import { Service } from '../service'
import { setApiResponse } from '../Handlers/ApiResponse.handler'

import { User } from '../Interfaces/Post/PostUser.interface'

import { Database } from '../Repository/Database'

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

        new Database()
        this.router.get(`${this.prefixPath}`, this.getAll);
        this.router.get(`${this.prefixPath}/:id`, this.getById);
        this.router.post(`${this.prefixPath}`, this.create)
    }

    getAll(request: Request, response: Response){
        response.send("teste")
    }

    getById(request: Request, response: Response){
        const result: string[] = []

        result.push("teste")
    
        response.json(setApiResponse<string[]>(result))
    }

    create(request: Request, response: Response){
        const result: User[] = []
        
        const toBeCreatedUser: User = request.body

        result.push(toBeCreatedUser)
    
        response.json(setApiResponse<User[]>(result))
    }
}