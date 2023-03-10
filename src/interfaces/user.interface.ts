import { z } from "zod";
import { returnMultipleUsersSchema, userReqSchema, userResponseSchema, userUpdateSchema } from "../schemas/users.schema";


export type IUserReq = z.infer<typeof userReqSchema>

export type iUserReturn = z.infer<typeof userResponseSchema>

export type iUsersReturn = z.infer<typeof returnMultipleUsersSchema>

export type iUserUpdateRequest = z.infer<typeof userUpdateSchema>  

export type iUpdateResponse = z.infer<typeof userResponseSchema>