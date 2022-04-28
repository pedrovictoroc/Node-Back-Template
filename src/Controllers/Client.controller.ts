import { Router, Request, Response } from 'express'
import { ServiceUoW } from '../Service/ServiceUoW'

export class ClientController {

    private prefixPath: string = "/client"
    private serviceUoW: ServiceUoW
    private router: Router

    constructor(){
        this.serviceUoW = new ServiceUoW();
        this.router = Router();
    }

    public getRouter(){
        this.router.get(`${this.prefixPath}`, (request: Request, response: Response) => this.getAll(request, response));
        this.router.get(`${this.prefixPath}/:id`, (request: Request, response: Response) => this.getById(request, response));
        this.router.post(`${this.prefixPath}`, (request: Request, response: Response) => this.create(request, response));
    
        return this.router
    }
 
    
    private getAll(request: Request, response: Response){
        this.serviceUoW.clientService.getAll(request, response)
    }

    private getById(request: Request, response: Response){
        this.serviceUoW.clientService.getById(request, response)
    }

    private create(request: Request, response: Response){
        this.serviceUoW.clientService.create(request, response)
    }
}