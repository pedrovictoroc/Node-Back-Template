import { Pool } from 'pg'
import { Database } from '../Database'
import { Migration } from '../../Interfaces/Migration/Migration.interface'

export class ClientMigration implements Migration{
    pool: Pool

    constructor(){
        this.pool = new Database().getPool()
    }

    run(): Promise<any>{
        const SQL = `
            CREATE TABLE Client(
                id serial PRIMARY KEY UNIQUE NOT NULL,    
                name TEXT NOT NULL,
                socialName TEXT NOT NULL,
                document TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            );
        `

        return new Promise((resolve, reject) => {
            this.pool.query(SQL, (err, res) => {
                if (err) {
                    throw new Error(`Erro ao executar migration CLIENT; Stack: ${err}`)
                }
                else{
                    resolve("")
                }
            })
        })
    }

    drop(): Promise<any>{
        const SQL = `
            DROP TABLE Client
        `

        return new Promise((resolve, reject) => {
            this.pool.query(SQL, (err, res) => {
                if (err) {
                    throw new Error(`Erro ao dropar tabela Client; Stack: ${err}`)
                }else{
                    resolve("")
                }
            })
        })  
    }
}