import { raw } from "body-parser";
import db from "../models";
import { where } from "sequelize/lib/sequelize";
import {hashUserPassword,checkEmailExist,checkPhoneExist} from './loginRegister'
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
      attributes:["id","username","email","phone","sex","address"],
      include:{model:db.Group,attributes:["name","description","id"]},
      order:[
        ['id','DESC']
      ]
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
const updateUser = async (data) => {
  try {
    if (!data.groupId) {
      return {
        EM: "Error with empty groupId",
        EC: 0,
        DT: "group",
      };
    }

    let user = await db.User.findOne({
      where: { id: data.id },
    });

    if (user) {
      // Cách 1: Dùng `update`
      await user.update({
        username: data.username,
        address: data.address,
        sex: data.sex,
        groupId: data.groupId,
      });
      return {
        EM: "Update user succeeds",
        EC: 0,
        DT: user,
      };
    } else {
      return {
        EM: "User not found",
        EC: 1,
        DT: "",
      };
    }
  } catch (e) {
    console.error("Lỗi trong updateUser:", e);
    return {
      EM: "Something wrong with services",
      EC: 1,
      DT: "group",
    };
  }
};

const createNewUser=async(data)=>{
  try{
    let isEmailExist =await checkEmailExist(data.email)
  if(isEmailExist===true){
    return {
      EM:'The email is already exist',
      EC:1,
      DT:'email'
    }
  }
  let isPhoneExist =await checkPhoneExist(data.phone)
  if(isPhoneExist===true){
    return {
      EM:'The phone is already exist',
      EC:1,
      DT:'phone'
    }
  }
  let hashPassword = hashUserPassword(data.password)
  await db.User.create({...data,password:hashPassword})
  return {
    EM:'create ok',
    EC:0,
    DT:[]
  }
  }catch(e){
    console.log(e)
    return {
      EM: "Something wrong with services",
      EC: 1,
      DT: "group",
    };
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