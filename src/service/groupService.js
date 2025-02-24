import db from "../models"
const getGroups =async()=>{
  try{
let data =await db.Group.findAll({
  order:[
    ['name','DESC']
  ]
})
return {
  EM:'Get group success',
  EC: 0,
  DT: data
}
  }catch(e){
    console.log(e)
    return {
      EM:'Error from service',
      EC: 1,
      DT: []
    }
  }
}
export {getGroups}