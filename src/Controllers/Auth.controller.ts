import { Router, Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

export class AuthController {

    private prefixPath: string = "/auth"
    private router: Router

    constructor(){
        this.router = Router();
    }
 
    public getRouter() {
        this.router.get(`${this.prefixPath}`, this.login);

        return this.router
    }

    private login(request: Request, response: Response){
        return response.send(sign({"teste": "teste"}, "teste", {
            expiresIn: 3000
        }))
    }
}