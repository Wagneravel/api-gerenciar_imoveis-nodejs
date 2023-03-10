import { Router } from "express";
import { allUserListController, createMovieController, softDeleteUserController, updadeUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { checkIfEmailMovieExistsMiddleware } from "../middlewares/verifyEmailUser.middleware";
import { verifyIfIdUserExistsMiddleware } from "../middlewares/verifyIdUserExists.middleware";
import verifyIsAdminOrSameUserMiddleware from "../middlewares/verifyIsAdminOrSameUser.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyTokenIsValid.middleware";
import { userReqSchema, userUpdateSchema } from "../schemas/users.schema";

const userRoutes:Router = Router() 

userRoutes.post('', ensureDataIsValidMiddleware(userReqSchema), checkIfEmailMovieExistsMiddleware, createMovieController) //users	Criação de usuário
userRoutes.get('', verifyTokenIsValidMiddleware, allUserListController  ) //users	Lista todos os usuários
userRoutes.patch('/:id', verifyTokenIsValidMiddleware, verifyIfIdUserExistsMiddleware, verifyIsAdminOrSameUserMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), checkIfEmailMovieExistsMiddleware, updadeUserController) //users/:id	Atualiza um usuário
userRoutes.delete('/:id', verifyTokenIsValidMiddleware, verifyIfIdUserExistsMiddleware, verifyIsAdminOrSameUserMiddleware, softDeleteUserController ) //users/:id	Realiza um soft delete no usuário

export default userRoutes


