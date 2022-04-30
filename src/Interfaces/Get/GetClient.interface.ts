import { AddressInterface } from "../Address.interface"

export interface GetClient {
    id: string,
    name: string
    socialName: string
    document: string
    email: string
    addresses: AddressInterface[]
}