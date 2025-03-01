import { updateUser,getAllUser,createNewUser,deleteUser,getUserWithPagination } from "../service/userApiService"
import {creatNewRoles} from '../service/RoleApiService'
const readFunctionRole =async(req,res)=>{
  try{
    if(req.query.page && req.query.limit){
    let page=req.query.page
    let limit = req.query.limit
    let data = await getUserWithPagination(+page,+limit)
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    })
    }else{

      let data = await getAllUser()
      return res.status(200).json({
       EM: data.EM,
       EC: data.EC,
       DT: data.DT,
     })
    }
      
   }catch(e){
    console.log(e)
    return res.status(500).json({
      EM: 'error from server',
      EC:'-1',
      DT:'',
    })
   }
}
const createFunctionRole =async(req,res)=>{
  try{
    let data=await creatNewRoles(req.body)
    return res.status(200).json({
     EM: data.EM,
     EC: data.EC,
     DT: data.DT,
   })
  }catch(e){
   console.log(e)
   return res.status(500).json({
    EM: 'error from server',
    EC:'-1',
    DT:'',
  })
  }
}
const updateFunctionRole =async(req,res)=>{
  try{
    let data=await updateUser(req.body)
    return res.status(200).json({
     EM: data.EM,
     EC: data.EC,
     DT: data.DT,
   })
  }catch(e){
   console.log(e)
   return res.status(500).json({
    EM: 'error from server',
    EC:'-1',
    DT:'',
  })
  }
}
const deleteFunctionRole =async(req,res)=>{
  try{
     let data=await deleteUser(req.body.id)
     return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    })
  }catch(e){
   console.log(e)
   return res.status(500).json({
    EM: 'error from server',
    EC:'-1',
    DT:'',
  })
  }
}

export{readFunctionRole,createFunctionRole,updateFunctionRole,deleteFunctionRole}