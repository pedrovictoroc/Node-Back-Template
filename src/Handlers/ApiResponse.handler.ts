import { ApiResponse } from '../Interfaces/ApiResponse.interface'

export function setApiResponse<Type>(arg: Type): ApiResponse {
    const returnedObj: ApiResponse = {
        data: arg,
        message: "teste"
    }

    return returnedObj;
}