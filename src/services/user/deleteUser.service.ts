
import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export async function softDeleteUserService(id: number, isAdmin:boolean): Promise<void> {

    if (!isAdmin) {
        throw new AppError('Unauthorized', 401);
    }

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const user = await userRepository.findOne({ where: { id } });
  
    if (!user) {
      throw new AppError("User not found", 404);
    }
  
    user.deletedAt = new Date();
    await userRepository.save(user);
  }
  