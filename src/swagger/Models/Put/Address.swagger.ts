export const PutAddress = {
    "required": ["id", "clientId", "country", "state", "city", "street", "number", "code", "complement"],
    "properties": {
        "id": {
            "type": "integer",
        },
        "clientId": {
            "type": "integer"
        },
        "country": {
            "type": "string",
        },
        "state": {
            "type": "string"
        },
        "city": {
            "type": "string",
        },
        "street": {
            "type": "string"
        },
        "number": {
            "type": "string",
        },
        "code": {
            "type": "string"
        },
        "complement": {
            "type": "string"
        }
    }
}