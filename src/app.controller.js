import connectDB from "./DB/connectDB.js"
import authController from "./module/auth/auth.controller.js"
import userController from "./module/user/user.controller.js"
import messageController from "./module/message/message.controller.js"
import { globalErrorHandling } from "./utils/error/Error/error.js"
import cors from "cors"
 const bootstrap = (app , express)=>{
   app.use(cors()) // cross-origin Resource Sharing 
   app.use(express.json()) //Parse
  connectDB()
  app.use("/auth", authController)
  app.use("/user", userController)
  app.use("/message", messageController)
  app.use(globalErrorHandling)
}
export default bootstrap