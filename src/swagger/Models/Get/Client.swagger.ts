export const GetClient = {
    "required": ["id", "name", "socialName", "document", "email"],
    "properties": {
        "id": {
            "type": "string",
        },
        "name": {
            "type": "string",
        },
        "socialName": {
            "type": "string"
        },
        "document": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/Address"
            }
        },
        
    }
}