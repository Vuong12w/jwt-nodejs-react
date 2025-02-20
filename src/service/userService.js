import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'
import db from '../models'
import { where } from 'sequelize/lib/sequelize'

const salt = bcrypt.genSaltSync(10)
const hashUserPassword=(userPassword)=>{
  let hashPassword = bcrypt.hashSync(userPassword,salt)
  return hashPassword
}
const creatNewUser =async(email,password,userName)=>{

 let hashPass = hashUserPassword(password)
 try{
  await db.User.create({
    username:userName,
    email:email,
    password:hashPass
  })
 }catch(error){
  console.log(error)
 }
}
const getListUser =async()=>{
  let users =[]
  users = db.User.findAll()
  return users
  
}
const deleteUser = async(userId)=>{
  await db.User.destroy({
    where: {id:userId}
  })

}
const updateUser = async(id)=>{
  let user ={}
  user = await db.User.findOne({
    where:{id:id},
  })
  return user

}
const updateUserInFor=async(email,username,id)=>{
  await db.User.update({email:email,username:username},{where:{id:id}})

}
export{creatNewUser,getListUser,deleteUser,updateUser,updateUserInFor}