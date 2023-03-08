import { Router } from "express";
import { checkIfEmailMovieExistsMiddleware } from "../middlewares/verifyEmailUser.middleware";


const userRoutes:Router = Router() 

userRoutes.post('', checkIfEmailMovieExistsMiddleware) //users	Criação de usuário
userRoutes.get('',  ) //users	Lista todos os usuários
userRoutes.patch('/:id', checkIfEmailMovieExistsMiddleware) //users/:id	Atualiza um usuário
userRoutes.delete('/:id', ) //users/:id	Realiza um soft delete no usuário

export default userRoutes


