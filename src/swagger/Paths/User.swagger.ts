export const UserPaths = {
    "/user": {
        "get": {
            "tags": ["User"],
            "summary": "Get all users",
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
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
            "tags": ["User"],
            "summary": "Create user",
            "parameters": [
                {
                    "name": "User",
                    "in": "body",
                    "description": "To be created user",
                    "schema": {
                        "$ref": "#/definitions/PostUser"
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
                                    "$ref": "#/definitions/User"
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
    "/user/:id": {
        "get": {
            "tags": ["User"],
            "summary": "Get user by ID",
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "required": ["data", "message"],
                        "properties": {
                            "data": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/User"
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