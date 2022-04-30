import { QueryHandler } from "../Handlers/Query.handler"

import { ClientInterface } from '../../Interfaces/Client.interface'
import { Client } from "pg"
import { GetClient } from "../../Interfaces/Get/GetClient.interface"
import { PostClient } from "../../Interfaces/Post/PostClient.interface"

export class ClientRepository {
    queryHandler: QueryHandler<GetClient>

    constructor(client: Client){
        this.queryHandler = new QueryHandler(client)
    }

    public async getAll(): Promise<ClientInterface[]>{
        const SQL = `
            SELECT * FROM Client
        `

        return await this.queryHandler.runQuery(SQL)
    }

    public async getById(clientId: string): Promise<GetClient[]>{
        const SQL = `
            SELECT * FROM Client WHERE id = $1
        `

        const values = [
            clientId
        ]
        
        return await this.queryHandler.runQuery(SQL, values)

    }

    public async create(client: PostClient): Promise<string> {
        const newId = await this.queryHandler.getSequence("client")
        
        const SQL = `
            INSERT INTO Client(
                id,
                name,
                socialName,
                document,
                email,
                password
            )
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6
            )
        `
        const values = [
            newId,
            client.name,
            client.socialName,
            client.document,
            client.email,
            client.password,
        ]

        await this.queryHandler.runQuery(SQL, values)
        
        return newId;
    }
}