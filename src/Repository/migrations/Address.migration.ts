import { Pool } from 'pg'
import { Database } from '../Database'
import { Migration } from '../../Interfaces/Migration/Migration.interface'

export class AddressMigration implements Migration {
    pool: Pool

    constructor(){
        this.pool = new Database().getPool()
    }

    run(): Promise<any>{
        const SQL = `
            CREATE TABLE Address(
                id serial PRIMARY KEY UNIQUE NOT NULL, 
                clientId serial NOT NULL,
                country TEXT NOT NULL,
                state TEXT NOT NULL,
                city TEXT NOT NULL,
                street TEXT NOT NULL,
                number TEXT NOT NULL,
                code TEXT NOT NULL,
                complement TEXT,
                FOREIGN KEY (clientId) REFERENCES Client (id)
            );
        `
        return new Promise((resolve, reject) => {
            this.pool.query(SQL, (err, res) => {
                if (err) {
                    throw new Error(`Erro ao executar migration Address; Stack: ${err}`)
                }else{
                    resolve("")
                }
            })
        })
    }

    drop(): Promise<any>{
        const SQL = `
            DROP TABLE Address
        `
        return new Promise((resolve, reject) => {
            this.pool.query(SQL, (err, res) => {
                if (err) {
                    throw new Error(`Erro ao dropar tabela Address; Stack: ${err}`)
                }else{
                    resolve("")
                }
            })
        })       
    }
}