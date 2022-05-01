export const AddressPaths = {
    "/client/{clientId}/address": {
        "get": {
            "tags": ["Address"],
            "summary": "Get all address from a client",
            "security": [{
                "Bearer": []
            }],
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "country",
                    "in": "query",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "state",
                    "in": "query",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "city",
                    "in": "query",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "code",
                    "in": "query",
                    "schema": {
                        "type": "integer"
                    }
                },
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Address"
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "404": {
                    "description": "Not found",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "400": {
                    "description": "Bad request",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                }
            }
        },
        "post": {
            "tags": ["Address"],
            "summary": "Create Address to a client",
            "security": [{
                "Bearer": []
            }],
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "Address",
                    "in": "body",
                    "description": "To be created Address",
                    "schema": {
                        "$ref": "#/components/schemas/PostAddress"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/Address"
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "400": {
                    "description": "Bad request",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                }
            }
        },
    },
    "/client/{clientId}/address/{addressId}": {
        "get": {
            "tags": ["Address"],
            "summary": "Get Address by ID",
            "security": [{
                "Bearer": []
            }],
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "addressId",
                    "in": "path",
                    "description": "Address ID",
                    "schema": {
                        "type": "integer"
                    }
                },
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/GetAddress"
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "404": {
                    "description": "Not found",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "400": {
                    "description": "Bad request",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                }
            }
        },
        "put": {
            "tags": ["Address"],
            "summary": "Update Address by ID",
            "security": [{
                "Bearer": []
            }],
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "addressId",
                    "in": "path",
                    "description": "Address ID",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "Address",
                    "in": "body",
                    "description": "To be updated Address",
                    "schema": {
                        "$ref": "#/components/schemas/PutAddress"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                            "$ref": "#/components/schemas/PutAddress"
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "400": {
                    "description": "Bad request",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                }
            }
        },
        "delete": {
            "tags": ["Address"],
            "summary": "Delete Address by ID",
            "security": [{
                "Bearer": []
            }],
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
                {
                    "name": "addressId",
                    "in": "path",
                    "description": "Address ID",
                    "schema": {
                        "type": "integer"
                    }
                },
            ],
            "responses": {
                
                "200": {
                    "description": "OK",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                },
                "400": {
                    "description": "Bad request",
                    "content": {
                        "application/json": {
                            "required": ["data", "message"],
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "data": {
                                        "type": "array",
                                        "items": {
                                        }
                                    },    
                                    "message": {
                                        "type": "string"
                                    },
                                },
                            }
                        }
                    },
                }
            }
        },
    }
}