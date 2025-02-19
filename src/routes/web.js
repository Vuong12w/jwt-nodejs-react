import express from "express"
import { handleHelloWord,handleUser } from "../controller/homeController"
const router = express.Router()
const initWebRoutes =(app)=>{
  router.get("/",handleHelloWord)
  router.get("/user",handleUser)

  return app.use("/",router)//giúp gán tất cả route của router vào app chính.
}
export default initWebRoutes;