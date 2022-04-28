import { Router, Request, Response } from 'express'
import { Service } from '../service'
import { setApiResponse } from '../Handlers/ApiResponse.handler'

import { User } from '../Interfaces/Post/PostUser.interface'

import { Database } from '../Repository/Database'

export class UserController {

    private prefixPath: string = "/user"
    private service: Service
    private router: Router

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

    private getAll(request: Request, response: Response){
        response.send("teste")
    }

    private getById(request: Request, response: Response){
        const result: string[] = []

        result.push("teste")
    
        response.json(setApiResponse<string[]>(result))
    }

    private create(request: Request, response: Response){
        const result: User[] = []
        
        const toBeCreatedUser: User = request.body

        result.push(toBeCreatedUser)
    
        response.json(setApiResponse<User[]>(result))
    }
}