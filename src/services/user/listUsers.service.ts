import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iUsersReturn } from "../../interfaces/user.interface";

export const listUsersService = async (isAdmin: boolean): Promise<iUsersReturn> => {
  if (!isAdmin) {
    throw new AppError('Unauthorized', 401);
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find();

  
    return users
}

