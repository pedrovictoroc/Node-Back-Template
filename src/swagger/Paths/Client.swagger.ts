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
    "/client/:id": {
        "get": {
            "tags": ["Client"],
            "summary": "Get Client by ID",
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
        }
    }
}