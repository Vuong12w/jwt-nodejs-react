import express from "express"
import { handleHelloWord,handleUser,handleCreateUser,handleDeleteUser,getUpdateUser,handleUpdateUser } from "../controller/homeController"
const router = express.Router()
const initWebRoutes =(app)=>{
  router.get("/",handleHelloWord)
  router.get("/user",handleUser)
  router.post("/users/create-user",handleCreateUser)
  router.post("/delete-user/:id", handleDeleteUser)
  router.get("/update-user/:id",getUpdateUser)
  router.post("/users/update-user",handleUpdateUser)
  return app.use("/",router)//giúp gán tất cả route của router vào app chính.
}
export default initWebRoutes;