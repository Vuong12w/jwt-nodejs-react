import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config()
import bodyParser from'body-parser'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
configViewEngine(app)
initWebRoutes(app)
const PORT = process.env.PORT||8081
app.listen(PORT,()=>{
  console.log(PORT)
})