import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserReq, iUserReturn } from "../../interfaces/user.interface"
import { userResponseSchema } from "../../schemas/users.schema"

export const createUserService = async ( userData: IUserReq ): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)  

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = userResponseSchema.parse(user)

    return newUser
}