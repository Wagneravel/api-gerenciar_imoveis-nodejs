import 'express-async-errors'
import express, { Application } from "express"
import { errorHandler } from "./errors"
import userRoutes from './routers/user.router'
import loginRoutes from './routers/login.router'
import categoriesRoutes from './routers/category.router'
import realEstateRoutes from './routers/realEstate.router'
import schedulesRoutes from './routers/schedules.router'



const app:Application = express()
app.use(express.json())

app.use("/users", userRoutes )
app.use("/login", loginRoutes )
app.use("/categories", categoriesRoutes )
app.use("/realEstate", realEstateRoutes )
app.use("/schedules", schedulesRoutes )

app.use(errorHandler)

export default app

