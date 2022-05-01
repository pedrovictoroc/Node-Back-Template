import { PutAddress } from "./Address.interface"

export interface PutClient {
    id: string
    name: string
    socialName: string
    document: string
    email: string
    password: string,
    addresses: PutAddress[]
}