import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { iUserReturn, iUserUpdateRequest } from "../../interfaces/user.interface"
import { returnUserSchema } from "../../schemas/users.schema"

export const updateUserService = async (newUserData: any, idUser: number): Promise<iUserReturn> => {

    if(!Object.keys(newUserData).length){
        console.log(newUserData)
        throw new AppError('Body cannot be empty, must contain at least description, name, price or duration!')
        
    }
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })
    
    const user = userRepository.create({
        ...oldUserData,
        ...newUserData
    })

    await userRepository.save(user)

    const updateUser = returnUserSchema.parse(user)

    return updateUser
}
