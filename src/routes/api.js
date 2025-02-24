import express from "express"
import { testApi,handleRegister,handleLogin } from "../controller/apiController"
import { readFunction,createFunction,updateFunction,deleteFunction } from "../controller/userController"
import { readFunc } from "../controller/groupController"
const router = express.Router()
const initApiRoutes =(app)=>{
  router.get("/test-api",testApi)
  router.post("/register",handleRegister)
  router.post("/login",handleLogin)
  router.get("/user/read/",readFunction)
  router.post("/user/create",createFunction)
  router.put("/user/update",updateFunction)
  router.delete("/user/delete",deleteFunction)
  router.get("/group/read/",readFunc)
  return app.use("/api/v1/",router)//giúp gán tất cả route của router vào app chính.
}
export default initApiRoutes;