import { QueryHandler } from "../Handlers/Query.handler"

import { Client } from '../../Interfaces/Client.interface'

export class ClientRepository {
    queryHandler: QueryHandler

    constructor(){
        this.queryHandler = new QueryHandler()
    }

    public async getAll(): Promise<Client[]>{
        const SQL = `
            SELECT * FROM Client
        `

        return await this.queryHandler.runQuery(SQL)
    }

    public async create(client: Client): Promise<void> {
        const SQL = `
            INSERT INTO Client(
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
                $5
            )
        `
        const values = [
            client.name,
            client.socialName,
            client.document,
            client.email,
            client.password,
        ]

        await this.queryHandler.runQuery(SQL, values)
    }
}