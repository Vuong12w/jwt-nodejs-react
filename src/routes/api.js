import express from "express"
import { testApi,handleRegister,handleLogin } from "../controller/apiController"
const router = express.Router()
const initApiRoutes =(app)=>{
  router.get("/test-api",testApi)
  router.post("/register",handleRegister)
  router.post("/login",handleLogin)
  return app.use("/api/v1/",router)//giúp gán tất cả route của router vào app chính.
}
export default initApiRoutes;