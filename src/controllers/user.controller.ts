import { Request, Response } from "express"
import { User } from "../entities"
import { AppError } from "../errors"
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

    const allList = await listUsersService()

    return response.status(200).json(allList)
}

export const updadeUserController = async (req:Request, res: Response) => {

    const idUser = parseInt(req.params.id)
    
    const userData = req.body

    const updatedUser = await updateUserService(userData, idUser)

    return res.status(200).json(updatedUser)
}

export async function softDeleteUserController(req: Request, res: Response): Promise<void> {

    const  id  = parseInt(req.params.id);
  
    await softDeleteUserService(id);
  
    res.status(204).end();
  }