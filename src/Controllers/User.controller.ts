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
        const sucessMessage: string = "Cliente criado com sucesso"
        const errorMessage: string = "Erro ao buscar cliente"
        const notFoundMessage: string = "Cliente não encontrado"
    
        const result: User[] = []
    
        try{
            const toBeFoundUser: User = {
                name: "string",
                socialName: "string",
                document: "string",
                email: "string",
                password: "string"
            }
            
            if(!!toBeFoundUser){
                result.push(toBeFoundUser)
                return response.status(200).json(setApiResponse<User[]>(result, sucessMessage))
            }
            
            return response.status(400).json(setApiResponse<User[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<User[]>(result, errorMessage, err.message))
        }    
    }

    private create(request: Request, response: Response){    
        const sucessMessage: string = "Cliente criado com sucesso"
        const errorMessage: string = "Erro ao buscar cliente"
        
        const result: User[] = []
    
        try{
            const toBeCreatedUser: User = request.body
            
            result.push(toBeCreatedUser)
            
            return response.status(200).json(setApiResponse<User[]>(result, sucessMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<User[]>(result, errorMessage, err.message))
        }
        
    }
}