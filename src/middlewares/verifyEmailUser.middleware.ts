import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const checkIfEmailMovieExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
  
    if(!req.body.email && req.method == "PATCH"){
        return  next();
    }
  
    const emailUser = await userRepository.findOne({
        where: {
            email: req.body.email
        }
    });

    if (emailUser) {
        throw new AppError('User already exists.', 409)
    }
    return  next();
};
