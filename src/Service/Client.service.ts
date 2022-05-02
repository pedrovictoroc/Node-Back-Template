import { Request, Response } from 'express'
import { sign, verify } from 'jsonwebtoken'
import { setApiResponse } from '../ApiHandlers/ApiResponse.handler'
import { RepositoryUoW } from '../Infrastructure/Repository/RepositoryUoW'
import { AddressInterface } from '../Interfaces/Address.interface'

import { ClientInterface } from '../Interfaces/Client.interface'
import { GetClient } from '../Interfaces/Get/GetClient.interface'
import { PostClient } from '../Interfaces/Post/PostClient.interface'
import { PutAddress } from '../Interfaces/Put/Address.interface'
import { PutClient } from '../Interfaces/Put/Client.interface'

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
        const errorMessage: string = "Erro ao criar cliente"
        
        let result: GetClient[] = []
    
        try{
            const toBeCreatedClient: PostClient = request.body

            await this.repositoryUoW.beginTransaction();
            
            const clientId: string = await this.repositoryUoW.clientRepository.create(toBeCreatedClient)

            await this.createClientAddresses(toBeCreatedClient, clientId)

            await this.repositoryUoW.commit();
            
            result.push({
                id: clientId,
                ...toBeCreatedClient, 
            })
            
            return response.status(200).json(setApiResponse<GetClient[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<GetClient[]>(result, errorMessage, err.message))
        }
    }
    
    public async update(request: Request, response: Response){    
        const sucessMessage: string = "Cliente atualizado com sucesso"
        const errorMessage: string = "Erro ao atualizar cliente"
        
        let result: GetClient[] = []
    
        try{
            const toBeupdatedClient: PutClient = request.body
            const clientId: string = request.params.clientId

            
            await this.repositoryUoW.beginTransaction();
            
            await this.repositoryUoW.clientRepository.update(toBeupdatedClient, clientId)

            await this.updateClientAddresses(toBeupdatedClient.addresses, clientId)

            await this.repositoryUoW.commit();

            result.push(toBeupdatedClient)

            return response.status(200).json(setApiResponse<GetClient[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<GetClient[]>(result, errorMessage, err.message))
        }
    }

    public async delete(request: Request, response: Response){    
        const sucessMessage: string = "Cliente deletado com sucesso"
        const errorMessage: string = "Erro ao deletar cliente"
        
        let result: GetClient[] = []
    
        try{
            const clientId: string = request.params.clientId
            
            const addressList: string[] = await this.repositoryUoW.addressRepository.getAddressIdListByClientId(clientId)
            
            await this.repositoryUoW.beginTransaction();
            await this.deleteClientAddresses(addressList, clientId)
            await this.repositoryUoW.clientRepository.delete(clientId)
            await this.repositoryUoW.commit();

            return response.status(200).json(setApiResponse<GetClient[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<GetClient[]>(result, errorMessage, err.message))
        }
    }

    private async createClientAddresses(toBeCreatedClient: PostClient, clientId: string){
        if(!toBeCreatedClient)
            return
            
        return await toBeCreatedClient.addresses.forEach(async (address) => {
            this.repositoryUoW.addressRepository.create(address, clientId)
        })   
    }
    
    private async updateClientAddresses(toBeUpdatedAddress: PutAddress[], clientId: string){
        if(!toBeUpdatedAddress)
            return

        return await toBeUpdatedAddress.forEach(async (address) => {
            this.repositoryUoW.addressRepository.update(address, clientId, address.id)
        })   
    }

    private async deleteClientAddresses(toBeDeletedAddress: string[], clientId: string){
        if(!toBeDeletedAddress)
            return

        return await toBeDeletedAddress.forEach(async (addressId) => {
            this.repositoryUoW.addressRepository.delete(clientId, addressId)
        })   
    }
}