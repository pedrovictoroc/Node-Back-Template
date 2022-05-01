import { AddressMigration } from './Address.migration'
import { ClientMigration } from './Client.migration'

export class MigrationUoW {
    constructor(){
    }

    private async run() {
        await new ClientMigration().run()
        await new AddressMigration().run()
    }

    private async drop() {
        await new AddressMigration().drop()
        await new ClientMigration().drop()
    }

    async reset() {
        try{
            await this.drop()
            await this.run()
            //console.log("Migration ENABLED and SUCCESSFULLY EXECUTED")
        }catch(err: any){
            throw new Error(err)
        }
    }
}