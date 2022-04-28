import { Pool } from "pg";
import { Database } from "../Database";


/* 
    User to avoid SQL Injection and others related major problems
*/
export class QueryHandler<T> {
    private pool: Pool
    
    constructor(){
        this.pool = new Database().getPool()
    }

    public async runQuery(sql: string, values: any[] = []): Promise<T[]>{
        try{
            const result = await this.pool.query(sql, values)
            return result.rows
        }catch(err: any){
            throw new Error(`Error trying to run query; Stack: ${err}`)
        }
    }
}