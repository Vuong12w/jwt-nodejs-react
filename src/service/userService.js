import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'


const salt = bcrypt.genSaltSync(10)
const hashUserPassword=(userPassword)=>{
  let hashPassword = bcrypt.hashSync(userPassword,salt)
  return hashPassword
}
const creatNewUser =async(email,password,userName)=>{
  const connection =await mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'jwt'
  })
 let hashPass = hashUserPassword(password)
 connection.query(
  'INSERT INTO users (email,password,username) VALUES(?,?,?)',[email,hashPass,userName],
  function(err,results,fields){
    console.log(results)
  }
)
}
const getListUser =async()=>{
  const connection =await mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'jwt'
  })
  let users =[]
  try{
    const [row,fields]=await connection.execute('Select * from users')
   return row
  }catch(error){
    console.log(error)
  }
}
const deleteUser = async(id)=>{
  const connection =await mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'jwt'
  })
  try{
    const [row,fields]=await connection.execute('DELETE FROM users WHERE id=?',[id])
   return row
  }catch(error){
    console.log(error)
  }
}
const updateUser = async(id)=>{
  const connection =await mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'jwt'
  })
  try{
    const [row,fields]=await connection.execute('Select * FROM users WHERE id=?',[id])
   return row
  }catch(error){
    console.log(error)
  }
}
const updateUserInFor=async(email,username,id)=>{
  const connection =await mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'jwt'
  })
  try {
    const [row,fields] = await connection.execute(
        'UPDATE users SET email = ?, username = ? WHERE id = ?',
        [email, username, id]
        
    );
   return row
  }catch(error){
    console.log(error)
  }
}
export{creatNewUser,getListUser,deleteUser,updateUser,updateUserInFor}