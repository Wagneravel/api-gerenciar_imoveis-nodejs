import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iUsersReturn } from "../../interfaces/user.interface";
import { returnMultipleUsersSchema } from "../../schemas/users.schema";

export const listUsersService = async (): Promise<iUsersReturn> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find();

  
  return returnMultipleUsersSchema.parse(users)
}

