import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config()
import bodyParser from'body-parser'
import connection from "./config/connectDB"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
configViewEngine(app)
initWebRoutes(app)
connection()
const PORT = process.env.PORT||8081
app.listen(PORT,()=>{
  console.log(PORT)
})