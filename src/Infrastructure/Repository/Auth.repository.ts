import { QueryHandler } from "../Handlers/Query.handler"

import { Client } from "pg"
import { GetAuth } from "../../Interfaces/Get/Auth.interface"

export class AuthRepository {
    queryHandler: QueryHandler<{id: string}>

    constructor(client: Client){
        this.queryHandler = new QueryHandler(client)
    }

    public async validateCredentials(loginCredentials: GetAuth): Promise<string[]>{
        const SQL = `
            SELECT id 
              FROM Client 
             WHERE document = $1
               AND password = $2;
        `

        const values = [
            loginCredentials.document,
            loginCredentials.password
        ]

        const result =  await this.queryHandler.runQuery(SQL, values)
        
        return [result[0].id]
    }
}