import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

async function verifyTokenIsValidMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Missing Bearer Token", 401);
  }

  try {
    const decodedToken: any = jwt.verify(token, process.env.SECRET_KEY!);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user = await userRepository.findOneOrFail(decodedToken.sub);

    request.user = {
      id: user.id,
      admin: user.admin,
    };

    return next();
  } catch (error) {
    throw new AppError("Invalid or expired token", 401);
  }
}

export default verifyTokenIsValidMiddleware;

