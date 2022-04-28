import { Pool } from 'pg'

export class Database {
    private pool: Pool

    constructor(){
        this.pool = new Pool({
            user: 'liven',
            host: 'localhost',
            database: 'liven',
            password: 'liven',
            port: 5433,
        })

        this.pool.connect().catch((err) => {
            throw new Error(`Erro ao conectar com o banco; Stack: ${err}`)
        })
    }

    getPool(): Pool {
        return this.pool
    }
}