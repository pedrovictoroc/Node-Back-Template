import { User } from './Models/User.swagger'
import { PostUser } from './Models/PostUser.swagger'
import { UserPaths } from './Paths/User.swagger'

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
          "name": "User",
          "description": "All User related endpoints"
        }
    ],
    "paths": {
      ...UserPaths
    },
    "definitions": {
        User,
        PostUser
    }
}