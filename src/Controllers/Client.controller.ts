import { Router, Request, Response } from 'express'
import { ServiceUoW } from '../Service/ServiceUoW'
import { authHandler } from '../ApiHandlers/Authorization.handler'

export class ClientController {

    private prefixPath: string = "/client"
    private serviceUoW: ServiceUoW
    private router: Router

    constructor(){
        this.serviceUoW = new ServiceUoW();
        this.router = Router();
    }

    public getRouter(){
        this.router.get(`${this.prefixPath}`, authHandler, (request: Request, response: Response) => this.getAll(request, response));
        this.router.get(`${this.prefixPath}/:clientId`, authHandler, (request: Request, response: Response) => this.getById(request, response));
        this.router.post(`${this.prefixPath}`, (request: Request, response: Response) => this.create(request, response));
        this.router.put(`${this.prefixPath}/:clientId`, authHandler, (request: Request, response: Response) => this.update(request, response));
        this.router.delete(`${this.prefixPath}/:clientId`, authHandler, (request: Request, response: Response) => this.delete(request, response));
    
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
    
    private update(request: Request, response: Response){
        this.serviceUoW.clientService.update(request, response)
    }
    
    private delete(request: Request, response: Response){
        this.serviceUoW.clientService.delete(request, response)
    }
}