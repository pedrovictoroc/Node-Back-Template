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
        }
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