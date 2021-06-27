import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";

interface IPayload { sub: string;};

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authtoken = req.headers.authorization;
    
    if(!authtoken) return res.status(401).end();

    const [,token] = authtoken.split(" ");
    
    try {
        const { sub } = verify(token, "dfs65g41dsf65g1d6f55") as IPayload;
        request.user_id = sub;
        return next();

    } catch (error) {
        return res.status(401).end();
    }
}