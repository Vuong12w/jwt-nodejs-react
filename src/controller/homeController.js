import { creatNewUser,getListUser,deleteUser,updateUser,updateUserInFor } from "../service/userService"
const handleHelloWord =(req,res)=>{
  return res.render('home.ejs')
}
const handleUser =async(req,res)=>{

 let userList =await getListUser()
  return res.render('user.ejs',{userList})
}
const handleCreateUser =(req,res)=>{
  let email = req.body.email
  let password = req.body.password
  let userName = req.body.userName
  creatNewUser(email,password,userName)
  
 return res.redirect('/user')
}
const handleDeleteUser=async(req,res)=>{
await deleteUser(req.params.id)
return res.redirect('/user')
}
const getUpdateUser=async(req,res)=>{
  let id = req.params.id
  const user = await updateUser(id)
  let listUser={}
  listUser=user
   res.render('updateUser.ejs',{listUser})
}
const handleUpdateUser=async(req,res)=>{
  let email=req.body.email
  let username=req.body.userName
  let id = req.body.id
  await updateUserInFor(email,username,id)
return res.redirect('/user')
}
export {handleHelloWord,handleUser,handleCreateUser,handleDeleteUser,getUpdateUser,handleUpdateUser}