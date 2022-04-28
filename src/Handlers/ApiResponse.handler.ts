import { ApiResponse } from '../Interfaces/ApiResponse.interface'

export function setApiResponse<Type>(data: Type, message: string, errorStack: string = ""): ApiResponse {
    const returnedObj: ApiResponse = {
        data,
        message,
        errorStack
    }

    return returnedObj;
}