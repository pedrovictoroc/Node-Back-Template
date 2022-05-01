import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

export function authHandler(request: Request, response: Response, next: NextFunction){
    
    let token: string = <string>request.headers['authorization'];
    if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });
    
    token = token.replace("Bearer ", "")

    verify(token, "teste", function(err, decoded) {
      if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      next();
    });
}