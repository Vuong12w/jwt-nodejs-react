import express from "express"
import { testApi,handleRegister,handleLogin } from "../controller/apiController"
import { readFunction,createFunction,updateFunction,deleteFunction,getUserAccount } from "../controller/userController"
import { readFunc } from "../controller/groupController"
import {checkUserJWT,checkUserPermission} from '../middleware/JWTAction'
const router = express.Router()
// const checkUserLogin=(req,res)=>{
//   const nonSercurePaths =['/','/rigister','/login']
//   if(nonSercurePaths.includes(req.path))return next()
//     next()
// }
const initApiRoutes =(app)=>{
  router.all('*',checkUserJWT,checkUserPermission)
  router.post("/register",handleRegister)
  router.post("/login",handleLogin)
  router.get('/account',getUserAccount)
  router.get("/user/read/",readFunction)
  router.post("/user/create",createFunction)
  router.put("/user/update",updateFunction)
  router.delete("/user/delete",deleteFunction)
  router.get("/group/read/",readFunc)
  return app.use("/api/v1/",router)//giúp gán tất cả route của router vào app chính.
}
export default initApiRoutes;