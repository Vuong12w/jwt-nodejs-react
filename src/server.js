import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import initApiRoutes from "./routes/api"
import configCors from "./config/cors"
import cookieParser from 'cookie-parser'
require("dotenv").config()
import bodyParser from'body-parser'
const app = express()
const PORT = process.env.PORT||8081
configCors(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
configViewEngine(app)
initWebRoutes(app)
initApiRoutes(app)
app.use((req,res)=>{
  return res.send('404 not found')
})
console.log("CORS Allowed Origin:", process.env.REACT_URL);
app.listen(PORT,()=>{
  console.log(PORT)
})