import { where } from "sequelize/dist/index.js"
import db from "../models"
const creatNewRoles=async(roles)=>{
  try{
    let currentRoles=await db.Role.findAll({
      attributes:['url','description'],
      raw:true
    })
    const persists=roles.filter(({url:url1})=>
      !currentRoles.some(({url:url2})=>url1===url2)
    )
    if(persists.length===0){
      return {
        EM: "Nothing to create",
        EC: 0,
        DT: [],
      }
    }
    await db.Role.bulkCreate(persists)
      return{
        EM: `Create roles succeeds:${persists.length} roles...`,
        EC: 0,
        DT: [],
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
const getAllRoles=async()=>{
  try{
   let data= await db.Role.findAll({
    order:[['id','DESC']]
   })
      return{
        EM: `Get all rote succeed`,
        EC: 0,
        DT: data,
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
const deleteRole=async(id)=>{
  try{
    let role= await db.Role.findOne({
      where:{id:id}
    })
    if(role){

      await role.destroy()
    }
       return{
         EM: `delete role succeed`,
         EC: 0,
         DT: [],
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
module.exports={creatNewRoles,getAllRoles,deleteRole}