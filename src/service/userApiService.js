import { raw } from "body-parser";
import db from "../models";
import { where } from "sequelize/lib/sequelize";
const getAllUser=async()=>{
try{
let users = await db.User.findAll({
  attributes:["id","username","email","phone","sex"],
  include:{model:db.Group,attributes:["name","description"]},
  nest:true
})
if(users){
  return{
    EM:'get data success',
    EC:0,
    DT: users
  }
}else{
  return{
    EM:'get data success',
    EC:0,
    DT: []
  }
}
}catch(e){
console.log(e)
return{
  EM:'Somthing wrong with servies',
  EC:1,
  DT: data
}
}
}
const getUserWithPagination=async(page,limit)=>{
  try{
    let offset=(page-1)*limit
    const {count,rows} = await db.User.findAndCountAll({
      offset:offset,
      limit:limit,
      attributes:["id","username","email","phone","sex"],
      include:{model:db.Group,attributes:["name","description"]},
    })
    console.log('offset:',offset)
    console.log('limit:',limit)
    let totalPages= Math.ceil(count/limit)
    let data={
      totalRows:count,
      totalPages: totalPages,
      users:rows
    } 
    return {
      EM:'fetch ok',
      EC:0,
      DT:data
    }
    }catch(e){
      console.log(e)
      return{
        EM:'Somthing wrong with servies',
        EC:1,
        DT: []
      }
    }
}
const updateUser =async(data)=>{
try{
 let user = await db.User.findOne({
  where:{id:data.id}
 })
 if(user){
  user.save({

  })
 }else{

 }
}catch(e){
  console.log(e)
}
}
const createNewUser=async(data)=>{
  try{
  await db.User.create(data)
  return {
    EM:'create ok',
    EC:0,
    DT:[]
  }
  }catch(e){
    console.log(e)
  }
}
const deleteUser=async(id)=>{
  try{
let user = await db.User.findOne({
  where:{id:id}
})
if(user){
  await user.destroy()
  return {
    EM:'delete user success ',
    EC: 0,
    DT: []
  }
}else{
  return {
    EM:'User not exist',
    EC: 2,
    DT: []
  }
}
  }catch(e){
    return {
      EM:'Error from service',
      EC: 1,
      DT: []
    }
    console.log(e)
  }

}
module.exports={getAllUser,updateUser,createNewUser,deleteUser,getUserWithPagination}