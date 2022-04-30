import { Client } from 'pg'
import { Database } from '../Database'
import { Migration } from '../../Interfaces/Migration/Migration.interface'

export class AddressMigration implements Migration {
    private client: Client

    constructor(){
        this.client = new Database().getClient()
    }

    run(): Promise<string>{
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

            CREATE SEQUENCE address_seq
            START 1
            INCREMENT 1;
        `
        return new Promise((resolve, reject) => {
            this.client.query(SQL, (err, res) => {
                if (err) {
                    reject(`Error while applying Address migration; Stack: ${err}`)
                }else{
                    resolve("")
                }
            })
        })
    }

    drop(): Promise<string>{
        const SQL = `
            DROP TABLE Address;
            
            DROP SEQUENCE address_seq;
        `
        return new Promise((resolve, reject) => {
            this.client.query(SQL, (err, res) => {
                if (err) {
                    reject(`Error while dropping Address table; Stack: ${err}`)
                }else{
                    resolve("")
                }
            })
        })       
    }
}