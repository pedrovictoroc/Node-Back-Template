import { Client } from './Models/Client.swagger'
import { PostClient } from './Models/PostClient.swagger'
import { ClientPaths } from './Paths/Client.swagger'

export const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Liven's API Document",
        "license": {
          "name": 'Apache 2.0',
          "url": 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    "basePath": "/",
    "schemes": ["http"],
    "host": "localhost:3000",
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "tags": [
        {
          "name": "Client",
          "description": "All Client related endpoints"
        }
    ],
    "paths": {
      ...ClientPaths
    },
    "definitions": {
        Client,
        PostClient
    }
}