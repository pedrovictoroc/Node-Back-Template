import express, { Express } from 'express'
import * as swaggerUI from 'swagger-ui-express'
import { swaggerDocument } from './swagger/swagger'

import { ControllerUoW } from './Controllers/ControllerUoW';
import { MigrationUoW } from './Repository/migrations/MigrationUoW'

export class Server {
    server: Express
    port: string | number

    constructor() {
        this.server = express();
        this.port = process.env.PORT || 3000;
     
        this.setupServer()
        this.initializeControllers(new ControllerUoW().getControllers());
        this.initializeSwagger()
    }

    async setupServer(){
        this.server.use(express.json())
        await new MigrationUoW().reset()
    }

    initializeControllers(controllers: any[]){
        controllers.forEach((controller) => {
            this.server.use(controller.router)
        })
    }

    initializeSwagger(){
        this.server.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    }

    run(){
        this.server.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
        });
    }
}