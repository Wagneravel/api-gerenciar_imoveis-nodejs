import { Request, Response } from "express"
import { User } from "../entities"
import { CreateUserDto } from "../interfaces/application.interface"
import { IUserReq } from "../interfaces/user.interface"
import { createUserService } from "../services/createUser.service"
// import { listUsersService } from "../services/listUsers.service"

export const createMovieController = async (req:Request, res: Response) => {

    const userData: IUserReq = req.body

    const newUser = await createUserService(userData)
    
    return res.status(201).json(newUser)
  
}

// export async function allUserListController(request:Request, response: Response): Promise<Response>{

//     const isUserAdmin: boolean = request.body.admin
//     const allList = await listUsersService(isUserAdmin)

//     return response.status(200).json(allList)
// }