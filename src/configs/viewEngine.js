import express from "express"
 const configViewEngine =(app)=>{
   app.use(express.static('./src/public'))//app.use() dùng để đăng ký middleware vào ứng dụng
   app.set("view engine","ejs")// sử dụng công cụ gì để viết html trong js
   app.set("views","./src/views")//định nghĩa nơi lưu trữ file
 }
 export default configViewEngine