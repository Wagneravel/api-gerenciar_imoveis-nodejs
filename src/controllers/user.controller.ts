import { Request, Response } from "express"
import { User } from "../entities"
import { AppError } from "../errors"
import { CreateUserDto } from "../interfaces/application.interface"
import { IUserReq } from "../interfaces/user.interface"
import { createUserService } from "../services/user/createUser.service"
import { softDeleteUserService } from "../services/user/deleteUser.service"
import { listUsersService } from "../services/user/listUsers.service"
import { updateUserService } from "../services/user/updateUser.service"

export const createMovieController = async (req:Request, res: Response) => {

    const userData: IUserReq = req.body

    const newUser = await createUserService(userData)
    
    return res.status(201).json(newUser)
  
}

export async function allUserListController(request:Request, response: Response): Promise<Response>{

    const isUserAdmin: boolean = request.body.admin
    const allList = await listUsersService(isUserAdmin)

    return response.status(200).json(allList)
}

export const updadeUserController = async (req:Request, res: Response) => {

    const idUser = parseInt(req.params.id)
    
    const userData = req.body

    const updatedUser = await updateUserService(userData, idUser)

    return res.status(200).json(updatedUser)
}

export async function softDeleteUserController(req: Request, res: Response): Promise<void> {

    const isAdmin: boolean = req.body.admin
    const  id  = parseInt(req.params.id);
  
    await softDeleteUserService(id , isAdmin);
  
    res.status(204).end();
  }