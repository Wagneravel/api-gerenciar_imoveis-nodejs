import { NextFunction, Request, Response} from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";


async function verifyIsAdminUserMiddleware(req:Request, response:Response, next:NextFunction): Promise<Response | void>{

    if(!req.user.admin){
        throw new AppError("Insufficient permission", 403);
    }
    
	return next();
}
export default verifyIsAdminUserMiddleware

