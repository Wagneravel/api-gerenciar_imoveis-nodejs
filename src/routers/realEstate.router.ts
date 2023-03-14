import { Router } from "express";
import { createRealEstateController, getAllRealEstatesController } from "../controllers/realEstate.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import verifyIsAdminUserMiddleware from "../middlewares/verifyIsAdminUser.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyTokenIsValid.middleware";
import { createRealEstateSchema } from "../schemas/real_estates.schemas";


const realEstateRoutes:Router = Router() 

realEstateRoutes.post('', verifyTokenIsValidMiddleware, verifyIsAdminUserMiddleware, ensureDataIsValidMiddleware(createRealEstateSchema),   createRealEstateController) //realEstate	Criação de um imóvel
realEstateRoutes.get('', getAllRealEstatesController) //realEstate	Lista todos os imóveis 


export default realEstateRoutes


