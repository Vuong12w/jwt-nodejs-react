import express from "express"
import { testApi,handleRegister } from "../controller/apiController"
const router = express.Router()
const initApiRoutes =(app)=>{
  router.get("/test-api",testApi)
  router.post("/register",handleRegister)
  return app.use("/api/v1/",router)//giúp gán tất cả route của router vào app chính.
}
export default initApiRoutes;