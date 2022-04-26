export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: "Liven's API Document",
        termsOfService: '',
        contact: {
            name: 'Pedro Victor Oliveira Carvalho',
            email: 'pvocufc@gmail.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    schemes: ["http"],
    host: "localhost:3080",
    basePath: "./",
    paths: {
        "/user/:id": {
            "get" : {
                "summary" : "Get all the tasks",
                "description": "Get all the tasks",
                "produces": ["application/json"],
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "object",
                            "items": {
                                "$ref": "#/definitions/ApiResponse"
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "type": "array",
                        }
                    }
                }
            }
        },
    },
    definitions: {
        "ApiResponse": {
            "type": "object",
            "properties": {
                "data": {
                     "type": "any"
                },
                "message": {
                    "type": "string"
                }
            }
        }
    }
}