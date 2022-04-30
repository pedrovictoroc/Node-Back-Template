import { Client } from 'pg'

export class Database {
    private client: Client

    constructor(){
        this.client = new Client({
            user: 'liven',
            host: 'localhost',
            database: 'liven',
            password: 'liven',
            port: 5433,
        })

        this.client.connect().catch((err) => {
            throw new Error(`Erro ao conectar com o banco; Stack: ${err}`)
        })
    }

    getClient(): Client {
        return this.client
    }
}