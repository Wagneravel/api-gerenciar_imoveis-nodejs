import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";
import verifyIsAdminOrSameUserMiddleware from "../middlewares/verifyIsAdminOrSameUser.middleware";


const categoriesRoutes:Router = Router() 

categoriesRoutes.post('',verifyIsAdminOrSameUserMiddleware, createCategoryController) //categories	Criação de categorias
categoriesRoutes.get('', ) //categories Deve listar todas as categorias 
categoriesRoutes.get('/:id/realEstate',  ) //categories	Lista todos imóveis que pertencem a uma categoria


export default categoriesRoutes


