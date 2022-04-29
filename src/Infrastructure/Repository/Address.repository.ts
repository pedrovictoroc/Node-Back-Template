import { QueryHandler } from "../Handlers/Query.handler"

import { Address } from "../../Interfaces/Address.interface"

export class AddressRepository {
    queryHandler: QueryHandler<Address>

    constructor(){
        this.queryHandler = new QueryHandler()
    }

    public async getAll(clientId: string): Promise<Address[]>{
        const SQL = `
            SELECT * FROM Address WHERE clientId = $1
        `

        const values = [
            clientId
        ]

        return await this.queryHandler.runQuery(SQL, values)
    }

    public async create(address: Address, clientId: string): Promise<void> {
        const newId = await this.queryHandler.getSequence("address")
        
        const SQL = `
            INSERT INTO Address(
                id,
                clientid,
                country,
                state,
                city,
                street,
                number,
                code,
                complement
            )
            VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6,
                $7,
                $8,
                $9
            )
        `
        const values = [
            newId,
            clientId,
            address.country,
            address.state,
            address.city,
            address.street,
            address.number,
            address.code,
            address.complement
        ]

        await this.queryHandler.runQuery(SQL, values)
    }
}