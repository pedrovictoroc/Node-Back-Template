import { Client } from 'pg'

export class Database {
    private client: Client

    constructor(){
        this.client = new Client({
            user: process.env.DATABASE_USER || "",
            host: process.env.DATABASE_HOST || "",
            database: process.env.DATABASE_NAME || "",
            password: process.env.DATABASE_PASSWORD || "",
            port: Number(process.env.DATABASE_PORT) || 0,
        })

        this.client.connect().catch((err) => {
            throw new Error(`Erro ao conectar com o banco; Stack: ${err}`)
        })
    }

    getClient(): Client {
        return this.client
    }
}