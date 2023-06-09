import { Router } from "express";
import { scheduleVisitController } from "../controllers/schedules.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyTokenIsValid.middleware";
import { createScheduleSchema } from "../schemas/schedules.schema";
import { getScheduleByRealEstateIdController } from "../controllers/schedules.controller";
import verifyIsAdminUserMiddleware from "../middlewares/verifyIsAdminUser.middleware";
import verifyIsAdminOrSameUserMiddleware from "../middlewares/verifyIsAdminOrSameUser.middleware";


const schedulesRoutes:Router = Router() 

schedulesRoutes.post('', verifyTokenIsValidMiddleware, ensureDataIsValidMiddleware(createScheduleSchema),  scheduleVisitController) //realEstate	Agenda uma visita a um imóvel
schedulesRoutes.get('/realEstate/:id', verifyTokenIsValidMiddleware, verifyIsAdminUserMiddleware, getScheduleByRealEstateIdController) // lista todos os agendamentos de um imóvel


export default schedulesRoutes


