import { getGroups } from "../service/groupService"
const readFunc=async(req,res)=>{
   try{
    let data= await getGroups()
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    })
   }catch(e){
    console.log(e)
    return {
      EM:'Error from server',
      EC: -1,
      DT: ''
    }
   }
}
export {readFunc}