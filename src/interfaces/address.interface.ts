import { z } from "zod";
import { createAddressSchema } from "../schemas/address.schema";



export type iAddress = z.infer<typeof createAddressSchema>
