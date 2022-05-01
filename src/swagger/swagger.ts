import { Client } from './Models/Client.swagger'
import { Address } from './Models/Address.swagger'
import { PostClient } from './Models/Post/PostClient.swagger'
import { GetAddress } from './Models/Get/Address.swagger'
import { PutAddress } from './Models/Put/Address.swagger'
import { PostAddress } from './Models/Post/Address.swagger'

import { GetClient } from './Models/Get/Client.swagger'
import { PutClient } from './Models/Put/PutClient.swagger'

import { PostAuth } from './Models/Post/Auth.swagger'

import { AuthPaths } from './Paths/Auth.swagger'
import { AddressPaths } from './Paths/Address.swagger'
import { ClientPaths } from './Paths/Client.swagger'

export const swaggerDocument = {
    "openapi": "3.0.1",
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
          "name": "Auth",
          "description": "All Auth related endpoints"
        },
        {
          "name": "Client",
          "description": "All Client related endpoints"
        },
        {
          "name": "Address",
          "description": "All Address related endpoints"
        }
    ],
    "paths": {
      ...AuthPaths,
      ...ClientPaths,
      ...AddressPaths,
    },
    "components": {
      "schemas":{
        PostAuth,
        Client,
        GetClient,
        PostClient,
        PutClient,
        Address,
        GetAddress,
        PutAddress,
        PostAddress
      },
      "securitySchemes": {
        "Bearer": {
          "type": "http",
          "in": "header",
          "description": "JWT Authorization header using the Bearer scheme.",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      }
    },
}