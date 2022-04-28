import { AddressMigration } from './Address.migration'
import { ClientMigration } from './Client.migration'

export class MigrationUoW {
    constructor(){
    }

    async run() {
        await new ClientMigration().run()
        await new AddressMigration().run()
    }

    async drop() {
        await new AddressMigration().drop()
        await new ClientMigration().drop()
    }

    async reset() {
        await this.drop()
        await this.run()

        console.log("Migration ENABLED and SUCCESSFULLY EXECUTED")
    }
}