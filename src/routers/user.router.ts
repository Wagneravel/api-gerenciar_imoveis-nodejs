import { Router } from "express";


const userRoutes:Router = Router() 

userRoutes.post('',) //users	Criação de usuário
userRoutes.get('',  ) //users	Lista todos os usuários
userRoutes.patch('/:id', ) //users/:id	Atualiza um usuário
userRoutes.delete('/:id', ) //users/:id	Realiza um soft delete no usuário

export default userRoutes


