import { updateUser,getAllUser,createNewUser,deleteUser,getUserWithPagination } from "../service/userApiService"
const readFunction =async(req,res)=>{
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
const createFunction =async(req,res)=>{
  try{
    let data=await createNewUser(req.body)
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
const updateFunction =(req,res)=>{
  try{

  }catch(e){
   console.log(e)
   return res.status(500).json({
    EM: 'error from server',
    EC:'-1',
    DT:'',
  })
  }
}
const deleteFunction =async(req,res)=>{
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
export{readFunction,createFunction,updateFunction,deleteFunction}