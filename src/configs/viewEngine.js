import express from "express"
 const configViewEngine =(app)=>{
   app.use(express.static('./src/public'))
   app.set("view engine","ejs")// sử dụng công cụ gì để viết html trong js
   app.set("view","./src/views")//định nghĩa nơi lưu trữ file
 }
 export default configViewEngine