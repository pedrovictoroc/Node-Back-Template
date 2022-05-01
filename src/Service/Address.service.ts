import { Request, Response } from 'express'
import { setApiResponse } from '../ApiHandlers/ApiResponse.handler'
import { RepositoryUoW } from '../Infrastructure/Repository/RepositoryUoW'

import { AddressInterface } from '../Interfaces/Address.interface'
import { AddressFilter } from '../Interfaces/Filters/Address.interface'
import { PutAddress } from '../Interfaces/Put/Address.interface'
import { GetAddress } from '../Interfaces/Get/Address.interface'

export class AddressService {
    private repositoryUoW: RepositoryUoW

    constructor(){
        this.repositoryUoW = new RepositoryUoW()
    }

    public async getAll(request: Request, response: Response){
        const sucessMessage: string = "Endereços encontrados com sucesso"
        const errorMessage: string = "Erro ao encontrar endereços"
        const notFoundMessage: string = "Endereços não encontrados"
    
        let result: AddressInterface[] = []
    
        try{
            const clientId: string = request.params.clientId

            const { 
                country,
                state,
                city,
                code
            } = request.query as any
            
            const addressFilter: AddressFilter = { country, state, city, code }

            const toBeFoundClients: AddressInterface[] = await this.repositoryUoW.addressRepository.getAll(clientId, addressFilter)
            
            if(!!toBeFoundClients.length){
                result = toBeFoundClients
                return response.status(200).json(setApiResponse<AddressInterface[]>(result, sucessMessage))
            }
            
            return response.status(404).json(setApiResponse<AddressInterface[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<AddressInterface[]>(result, errorMessage, err.message))
        }
    }

    public async getById(request: Request, response: Response){
        const sucessMessage: string = "Endereço encontrado com sucesso"
        const errorMessage: string = "Erro ao encontrar endereço"
        const notFoundMessage: string = "Endereço não encontrado"
    
        const result: AddressInterface[] = []
    
        try{
            const clientId: string = request.params.clientId
            const addressId: string = request.params.addressId

            const address: AddressInterface[] = await this.repositoryUoW.addressRepository.getById(clientId, addressId)
            
            if(!!address.length){
                result.push(address[0])
                return response.status(200).json(setApiResponse<AddressInterface[]>(result, sucessMessage))
            }
            
            return response.status(404).json(setApiResponse<AddressInterface[]>(result, notFoundMessage))
        }
        catch(err: any){
            return response.status(400).json(setApiResponse<AddressInterface[]>(result, errorMessage, err.message))
        }    
    }

    public async create(request: Request, response: Response){    
        const sucessMessage: string = "Endereço criado com sucesso"
        const errorMessage: string = "Erro ao criar endereço"
        
        const result: AddressInterface[] = []
    
        try{
            const toBeCreatedAddress: AddressInterface = request.body
            const clientId: string = request.params.clientId
            
            await this.repositoryUoW.beginTransaction();
            
            await this.repositoryUoW.addressRepository.create(toBeCreatedAddress, clientId)

            await this.repositoryUoW.commit();

            result.push(toBeCreatedAddress)

            return response.status(200).json(setApiResponse<AddressInterface[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<AddressInterface[]>(result, errorMessage, err.message))
        }
    }

    public async update(request: Request, response: Response){    
        const sucessMessage: string = "Endereço atualizado com sucesso"
        const errorMessage: string = "Erro ao atualizar endereço"
        
        let result: GetAddress[] = []
    
        try{
            const toBeCreatedAddress: PutAddress = request.body
            const clientId: string = request.params.clientId
            const addressId: string = request.params.addressId
            
            await this.repositoryUoW.beginTransaction();
            
            await this.repositoryUoW.addressRepository.update(toBeCreatedAddress, clientId, addressId)

            await this.repositoryUoW.commit();

            const address: GetAddress[] = await this.repositoryUoW.addressRepository.getById(clientId, addressId)

            result = address

            return response.status(200).json(setApiResponse<PutAddress[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<PutAddress[]>(result, errorMessage, err.message))
        }
    }

    public async delete(request: Request, response: Response){    
        const sucessMessage: string = "Endereço deletado com sucesso"
        const errorMessage: string = "Erro ao deletar endereço"
        
        let result: GetAddress[] = []
    
        try{
            const clientId: string = request.params.clientId
            const addressId: string = request.params.addressId
            
            await this.repositoryUoW.beginTransaction();
            
            await this.repositoryUoW.addressRepository.delete(clientId, addressId)

            await this.repositoryUoW.commit();

            return response.status(200).json(setApiResponse<GetAddress[]>(result, sucessMessage))
        }
        catch(err: any){
            await this.repositoryUoW.rollback();
            return response.status(400).json(setApiResponse<GetAddress[]>(result, errorMessage, err.message))
        }
    }
}