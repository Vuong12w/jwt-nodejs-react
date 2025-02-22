import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import initApiRoutes from "./routes/api"
import configCors from "./config/cors"
require("dotenv").config()
import bodyParser from'body-parser'
import connection from "./config/connectDB"
const app = express()
const PORT = process.env.PORT||8081
configCors(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
configViewEngine(app)
initWebRoutes(app)
initApiRoutes(app)
console.log("CORS Allowed Origin:", process.env.REACT_URL);
app.listen(PORT,()=>{
  console.log(PORT)
})