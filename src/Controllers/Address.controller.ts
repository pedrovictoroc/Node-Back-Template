import { Router, Request, Response } from 'express'
import { authHandler } from '../ApiHandlers/Authorization.handler'
import { ServiceUoW } from '../Service/ServiceUoW'

export class AddressController {

    private prefixPath: string = "/client/:clientId/address"
    private serviceUoW: ServiceUoW
    private router: Router

    constructor(){
        this.serviceUoW = new ServiceUoW();
        this.router = Router();
    }

    public getRouter(){
        this.router.get(`${this.prefixPath}`, authHandler, (request: Request, response: Response) => this.getAll(request, response));
        this.router.get(`${this.prefixPath}/:addressId`, authHandler, (request: Request, response: Response) => this.getById(request, response));
        this.router.post(`${this.prefixPath}`, authHandler, (request: Request, response: Response) => this.create(request, response));
        this.router.put(`${this.prefixPath}/:addressId`, authHandler, (request: Request, response: Response) => this.update(request, response));
        this.router.delete(`${this.prefixPath}/:addressId`, authHandler, (request: Request, response: Response) => this.delete(request, response));
    
        return this.router
    }
 
    
    private getAll(request: Request, response: Response){
        this.serviceUoW.addressService.getAll(request, response)
    }

    private getById(request: Request, response: Response){
        this.serviceUoW.addressService.getById(request, response)
    }

    private create(request: Request, response: Response){
        this.serviceUoW.addressService.create(request, response)
    }

    private update(request: Request, response: Response){
        this.serviceUoW.addressService.update(request, response)
    }
    
    private delete(request: Request, response: Response){
        this.serviceUoW.addressService.delete(request, response)
    }
}