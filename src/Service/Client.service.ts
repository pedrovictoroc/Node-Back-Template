import { Request, Response } from 'express'
import { setApiResponse } from '../ApiHandlers/ApiResponse.handler'
import { RepositoryUoW } from '../Infrastructure/Repository/RepositoryUoW'

import { ClientInterface } from '../Interfaces/Client.interface'
import { GetClient } from '../Interfaces/Get/GetClient.interface'
import { PostClient } from '../Interfaces/Post/PostClient.interface'

export class ClientService {
    private repositoryUoW: RepositoryUoW

    constructor(){
        this.repositoryUoW = new RepositoryUoW()
    }

    public async getAll(request: Request, response: Response){
        const sucessMessage: string = "Clientes encontrados com sucesso"
        const errorMessage: string = "Erro ao encontrar cliente"
        const notFoundMessage: string = "Clientes não encontrados"
    
        let result: ClientInterface[] = []
    
        try{
            const toBeFoundClients: ClientInterface[] = await this.repositoryUoW.clientRepository.getAll()

            if(!!toBeFoundClients.length){
                result = toBeFoundClients
                return response.status(200).json(setApiResponse<ClientInterface[]>(result, sucessMessage))
            }
            
            return response.status(404).json(setApiResponse<ClientInterface[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<ClientInterface[]>(result, errorMessage, err.message))
        }
    }

    public async getById(request: Request, response: Response){
        const sucessMessage: string = "Cliente encontrado com sucesso"
        const errorMessage: string = "Erro ao encontrar cliente"
        const notFoundMessage: string = "Cliente não encontrado"
    
        let result: GetClient[] = []
    
        try{
            const clientId: string = request.params.clientId
            
            const toBeFoundClient: GetClient[] = await this.repositoryUoW.clientRepository.getById(clientId)
            
            if(!!toBeFoundClient.length){
                toBeFoundClient[0].addresses = await this.repositoryUoW.addressRepository.getAll(clientId, null)
                result = toBeFoundClient
                return response.status(200).json(setApiResponse<GetClient[]>(result, sucessMessage))
            }
            
            return response.status(404).json(setApiResponse<GetClient[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<GetClient[]>(result, errorMessage, err.message))
        }    
    }

    public async create(request: Request, response: Response){    
        const sucessMessage: string = "Cliente criado com sucesso"
        const errorMessage: string = "Erro ao buscar cliente"
        
        const result: ClientInterface[] = []
    
        try{
            const toBeCreatedClient: PostClient = request.body

            await this.repositoryUoW.beginTransaction();
            
            const clientId: string = await this.repositoryUoW.clientRepository.create(toBeCreatedClient)

            await this.createClientAddresses(toBeCreatedClient, clientId)

            result.push(toBeCreatedClient)

            await this.repositoryUoW.commit();
            
            return response.status(200).json(setApiResponse<ClientInterface[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<ClientInterface[]>(result, errorMessage, err.message))
        }
    }
    
    private async createClientAddresses(toBeCreatedClient: PostClient, clientId: string){
        return await toBeCreatedClient.addresses.forEach(async (address) => {
            this.repositoryUoW.addressRepository.create(address, clientId)
        })   
    }
}