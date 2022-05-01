import { Client } from "pg";

/* 
    Used to avoid SQL Injection and others related major problems
*/
export class QueryHandler<T> {
    private client: Client

    constructor(client: Client){
        this.client = client;
    }

    public async runQuery(sql: string, values: any[] = []): Promise<T[]>{
        try{
            const result = await this.client.query(sql, values)
            return result.rows
        }catch(err: any){
            throw new Error(`Error trying to run query; Stack: ${err}`)
        }
    } 

    public async getSequence(tableName: string): Promise<string>{
        try{
            const SQL = `SELECT nextval('${tableName}_seq');`

            const result = await this.client.query(SQL)
            return result.rows[0].nextval
        }catch(err: any){
            throw new Error(`Error trying to generate ${tableName}_seq; Stack: ${err}`)
        }
    }
}