export const ClientPaths = {
    "/client": {
        "get": {
            "tags": ["Client"],
            "summary": "Get all clients",
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Client"
                                }
                            },
                            "message": {
                                "type": "string"
                            },
                        }
                    }
                }
            }
        },
        "post": {
            "tags": ["Client"],
            "summary": "Create Client",
            "parameters": [
                {
                    "name": "Client",
                    "in": "body",
                    "description": "To be created Client",
                    "schema": {
                        "$ref": "#/definitions/PostClient"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Client"
                                }
                            },
                            "message": {
                                "type": "string"
                            },
                        }
                    }
                },
                "400": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                }
                            },
                            "message": {
                                "type": "string"
                            },
                        }
                    }
                }
            }
        },
    },
    "/client/{clientId}": {
        "get": {
            "tags": ["Client"],
            "summary": "Get Client by ID",
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/GetClient"
                                }
                            },
                            "message": {
                                "type": "string"
                            },
                        }
                    }
                }
            }
        },
        "put": {
            "tags": ["Client"],
            "summary": "Update Cliente by ID",
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
                    "name": "Client",
                    "in": "body",
                    "description": "To be updated Client",
                    "schema": {
                        "$ref": "#/definitions/PostClient"
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/GetClient"
                                }
                            },
                            "message": {
                                "type": "string"
                            },
                        }
                    }
                }
            }
        },
        "delete": {
            "tags": ["Client"],
            "summary": "Delete Client by ID",
            "parameters": [
                {
                    "name": "clientId",
                    "in": "path",
                    "description": "Client ID",
                    "schema": {
                        "type": "integer"
                    }
                },
            ],
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                }
                            },
                            "message": {
                                "type": "string"
                            },
                        }
                    }
                }
            }
        },
    }
}