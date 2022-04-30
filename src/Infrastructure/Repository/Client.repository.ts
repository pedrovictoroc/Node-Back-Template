import { QueryHandler } from "../Handlers/Query.handler"

import { ClientInterface } from '../../Interfaces/Client.interface'
import { Client } from "pg"

export class ClientRepository {
    queryHandler: QueryHandler<ClientInterface>

    constructor(client: Client){
        this.queryHandler = new QueryHandler(client)
    }

    public async getAll(): Promise<ClientInterface[]>{
        const SQL = `
            SELECT * FROM Client
        `

        return await this.queryHandler.runQuery(SQL)
    }

    public async create(client: ClientInterface): Promise<string> {
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