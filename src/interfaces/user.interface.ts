import { z } from "zod";
import { userReqSchema, userResponseSchema } from "../schemas/users.schema";


export type IUserReq = z.infer<typeof userReqSchema>

export type iUserReturn = z.infer<typeof userResponseSchema>
