export const PostUser = {
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
    }
}