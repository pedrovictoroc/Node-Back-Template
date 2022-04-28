import { Pool } from "pg";
import { Database } from "../Database";

export class QueryHandler {
    private pool: Pool
    
    constructor(){
        this.pool = new Database().getPool()
    }

    public async runQuery(sql: string, values: any[] = []): Promise<any[]>{
        let response: any[] = []
        await this.pool.query(sql, values).then(res => {
            response = res.rows;
        })
        .catch((err: any) => {
            throw new Error(`Error trying to run query; Stack: ${err}`)
        })

        return response
    }
}