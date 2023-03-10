import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

async function verifyTokenIsValidMiddleware(request: Request,  response: Response, next: NextFunction) {
  let token = request.headers.authorization

  if(!token){
      throw new AppError("Missing Bearer Token", 401);
  }

  token = token.split(" ")[1]

  jwt.verify(token, process.env.JWT_SECRET_KEY!, (error, decoded: any) => {
  if (error) {
    throw new AppError(error.message, 401);
  }
  request.user = {
    id: decoded.sub,
    admin: decoded.admin,
  };
  return next();
});
  
}

export default verifyTokenIsValidMiddleware;

