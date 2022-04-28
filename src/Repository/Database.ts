import { Pool, Client } from 'pg'

export class Database {
    pool: Pool

    constructor(){
        this.pool = new Pool({
            user: 'liven',
            host: 'localhost',
            database: 'liven',
            password: 'liven',
            port: 5433,
        })

        this.pool.connect()

        this.pool.query("SELECT NOW() as now", (err, res) => {
            if (err) {
                throw new Error(`Erro ao conectar com o banco; Stack: ${err}`)
            }
        })
    }

    getPool(): Pool {
        return this.pool
    }
}