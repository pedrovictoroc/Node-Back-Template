import { Client } from "pg";
import { Database } from "../Database";
import { QueryHandler } from "../Handlers/Query.handler";
import { AddressRepository } from "./Address.repository";
import { AuthRepository } from "./Auth.repository";
import { ClientRepository } from "./Client.repository";

export class RepositoryUoW {

    private client: Client
    private queryHandler: QueryHandler<void>

    authRepository: AuthRepository
    clientRepository: ClientRepository
    addressRepository: AddressRepository

    constructor(){
        this.client = new Database().getClient();

        this.queryHandler = new QueryHandler<void>(this.client);

        this.authRepository = new AuthRepository(this.client)
        this.clientRepository = new ClientRepository(this.client)
        this.addressRepository = new AddressRepository(this.client)
    }

    public beginTransaction(){
        try{
            const SQL = `
                BEGIN
            `

            this.queryHandler.runQuery(SQL);
        }catch(err: any){
            throw new Error(`Error beginning transaction; Stack: ${err}`)
        }
        
    }

    public commit(){
        try{
            const SQL = `
                COMMIT
            `

            this.queryHandler.runQuery(SQL);
        }catch(err: any){
            throw new Error(`Error committing transaction; Stack: ${err}`)
        }
    }

    public rollback(){
        try{
            const SQL = `
                ROLLBACK
            `

            this.queryHandler.runQuery(SQL);
        }catch(err: any){
            throw new Error(`Error rollbacking transaction; Stack: ${err}`)
        }
    }
}