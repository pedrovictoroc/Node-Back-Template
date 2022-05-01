export const PutClient = {
    "required": ["name", "socialName", "document", "email", "password"],
    "properties": {
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
        "password": {
            "type": "string"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/PutAddress"
            }
        },
    }
}