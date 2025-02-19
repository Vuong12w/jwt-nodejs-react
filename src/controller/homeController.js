const handleHelloWord =(req,res)=>{
  return res.render('home.ejs')
}
const handleUser =(req,res)=>{
  return res.render('user.ejs')
}
export {handleHelloWord,handleUser}