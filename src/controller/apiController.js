import { registerNewUser,handleUserLogin } from "../service/loginRegister"
const testApi =(req,res)=>{
return  res.status(200).json({
  message:'ok',
  data:'test api'
})
}
const handleRegister=async(req,res)=>{
  try{
      if(!req.body.email || !req.body.phone || !req.body.password ){
        return res.status(200).json({
          EM:'Missing required parameters',
          EC:'1',
          DT:''
        })
      }
      if(req.body.password && req.body.password.length <5){
        return res.status(200).json({
          EM:'Your password must have more than 4 letters',
          EC:'1',
          DT:''
        })
      }
      let data= await registerNewUser(req.body)
      return res.status(200).json({
        EM:data.EM,
        EC:data.EC,
        DT:''
      })
  }catch(e){
    return res.status(500).json({
      EM: 'error from server',
      EC:'',
      DT:'',
    })
  }
  console.log("call me",req.body)
}
const handleLogin=async(req,res)=>{
  try{
    let data =await handleUserLogin(req.body)
  
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    })
  }catch(error){
  
  console.log(req.body)
  return  res.status(500).json({
      EM: 'error from server',
      EC: '-1',
      DT: '',
  })
}
}
module.exports={
testApi,handleRegister,handleLogin
}