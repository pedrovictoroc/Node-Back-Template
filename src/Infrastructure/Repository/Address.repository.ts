import { QueryHandler } from "../Handlers/Query.handler"

import { AddressInterface } from "../../Interfaces/Address.interface"
import { Client } from "pg"
import { AddressFilter } from "../../Interfaces/Filters/Address.interface"
import { GetAddress } from "../../Interfaces/Get/Address.interface"
import { PutAddress } from "../../Interfaces/Put/Address.interface"

export class AddressRepository {
    queryHandler: QueryHandler<GetAddress>

    constructor(client: Client){
        this.queryHandler = new QueryHandler(client)
    }

    public async getAll(clientId: string, addressFilter: AddressFilter | null = null): Promise<AddressInterface[]>{
        const SQL = `
            SELECT * FROM Address WHERE clientId = $1
        `

        const values = [
            clientId
        ]

        const { sqlWithFilter, valuesWithFilter } = this.applyGetAllFilters(SQL, values, addressFilter)

        return await this.queryHandler.runQuery(sqlWithFilter, valuesWithFilter)
    }

    public async getById(clientId: string, addressId: string): Promise<GetAddress[]>{
        const SQL = `
            SELECT * FROM Address WHERE id = $1 AND clientId = $2
        `

        const values = [
            addressId,
            clientId
        ]

        return await this.queryHandler.runQuery(SQL, values)
    }

    public async create(address: AddressInterface, clientId: string): Promise<void> {
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

    public async update(address: PutAddress, clientId: string, addressId: string): Promise<void> {
        const SQL = `
            UPDATE Address
            SET country = $1,
                state = $2,
                city = $3,
                street = $4,
                number = $5,
                code = $6,
                complement = $7
            WHERE id = $8
              AND clientid = $9
        `
        const values = [
            address.country,
            address.state,
            address.city,
            address.street,
            address.number,
            address.code,
            address.complement,
            addressId,
            clientId,
        ]
        console.log(values)

        await this.queryHandler.runQuery(SQL, values)
    }

    public async delete(clientId: string, addressId: string): Promise<void> {
        const SQL = `
            DELETE FROM Address
            WHERE id = $1
              AND clientid = $2
        `
        const values = [
            addressId,
            clientId,
        ]

        await this.queryHandler.runQuery(SQL, values)
    }

    public async getAddressIdListByClientId(clientId: string): Promise<string[]>{
        const SQL = `
            SELECT id FROM Address WHERE clientId = $1
        `

        const values = [
            clientId
        ]

        const result = await this.queryHandler.runQuery(SQL, values)
    
        return result.map((r) => r.id)
    }

    private applyGetAllFilters(SQL: string, values: any[], addressFilter: AddressFilter | null = null){
        let sqlWithFilter = SQL
        let valuesWithFilter = values

        if(!addressFilter)
            return { sqlWithFilter, valuesWithFilter }

        if(addressFilter.country){
            values.push(addressFilter.country)
            sqlWithFilter += ` AND country = $${values.length}`
        }
        if(addressFilter.state){
            values.push(addressFilter.state)
            sqlWithFilter += ` AND state = $${values.length}`
        }
        if(addressFilter.city){
            values.push(addressFilter.city)
            sqlWithFilter += ` AND city = $${values.length}`
        }
        if(addressFilter.code){
            values.push(addressFilter.code)
            sqlWithFilter += ` AND code = $${values.length}`
        }

        return { sqlWithFilter, valuesWithFilter }
    }
}