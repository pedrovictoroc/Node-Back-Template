import { Request, Response } from 'express'
import { setApiResponse } from '../ApiHandlers/ApiResponse.handler'
import { RepositoryUoW } from '../Infrastructure/Repository/RepositoryUoW'

import { Client } from '../Interfaces/Client.interface'

export class ClientService {
    private repositoryUoW: RepositoryUoW

    constructor(){
        this.repositoryUoW = new RepositoryUoW()
    }

    public async getAll(request: Request, response: Response){
        const sucessMessage: string = "Clientes encontrados com sucesso"
        const errorMessage: string = "Erro ao encontrar cliente"
        const notFoundMessage: string = "Clientes não encontrados"
    
        let result: Client[] = []
    
        try{
            const toBeFoundClients: Client[] = await this.repositoryUoW.clientRepository.getAll()

            if(!!toBeFoundClients.length){
                result = toBeFoundClients
                return response.status(200).json(setApiResponse<Client[]>(result, sucessMessage))
            }
            
            return response.status(404).json(setApiResponse<Client[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<Client[]>(result, errorMessage, err.message))
        }
    }

    public async getById(request: Request, response: Response){
        const sucessMessage: string = "Cliente encontrado com sucesso"
        const errorMessage: string = "Erro ao encontrar cliente"
        const notFoundMessage: string = "Cliente não encontrado"
    
        const result: Client[] = []
    
        try{
            const toBeFoundClient: Client = {
                name: "string",
                socialName: "string",
                document: "string",
                email: "string",
                password: "string",
            }
            
            if(!!toBeFoundClient){
                result.push(toBeFoundClient)
                return response.status(200).json(setApiResponse<Client[]>(result, sucessMessage))
            }
            
            return response.status(404).json(setApiResponse<Client[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<Client[]>(result, errorMessage, err.message))
        }    
    }

    public async create(request: Request, response: Response){    
        const sucessMessage: string = "Cliente criado com sucesso"
        const errorMessage: string = "Erro ao buscar cliente"
        
        const result: Client[] = []
    
        try{
            const toBeCreatedClient: Client = request.body
            
            await this.repositoryUoW.clientRepository.create(toBeCreatedClient)
            
            return response.status(200).json(setApiResponse<Client[]>(result, sucessMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<Client[]>(result, errorMessage, err.message))
        }
        
    }
}