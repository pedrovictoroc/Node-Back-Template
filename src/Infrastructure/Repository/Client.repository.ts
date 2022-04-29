import { QueryHandler } from "../Handlers/Query.handler"

import { Client } from '../../Interfaces/Client.interface'

export class ClientRepository {
    queryHandler: QueryHandler<Client>

    constructor(){
        this.queryHandler = new QueryHandler()
    }

    public async getAll(): Promise<Client[]>{
        const SQL = `
            SELECT * FROM Client
        `

        return await this.queryHandler.runQuery(SQL)
    }

    public async create(client: Client): Promise<string> {
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