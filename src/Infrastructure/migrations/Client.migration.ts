import { Client } from 'pg'
import { Database } from '../Database'
import { Migration } from '../../Interfaces/Migration/Migration.interface'

export class ClientMigration implements Migration{
    private client: Client

    constructor(){
        this.client = new Database().getClient()
    }

    run(): Promise<string>{
        const SQL = `
            CREATE TABLE Client(
                id serial PRIMARY KEY UNIQUE NOT NULL,    
                name TEXT NOT NULL,
                socialName TEXT NOT NULL,
                document TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            );

            CREATE SEQUENCE client_seq
            START 1
            INCREMENT 1;
        `

        return new Promise((resolve, reject) => {
            this.client.query(SQL, (err, res) => {
                if (err) {
                    reject(`Erro ao executar migration CLIENT; Stack: ${err}`)
                }
                else{
                    resolve("")
                }
            })
        })
    }

    drop(): Promise<string>{
        const SQL = `
            DROP TABLE Client;
            
            DROP SEQUENCE client_seq;
        `

        return new Promise((resolve, reject) => {
            this.client.query(SQL, (err, res) => {
                if (err) {
                    reject(`Erro ao dropar tabela Client; Stack: ${err}`)
                }else{
                    resolve("")
                }
            })
        })  
    }
}