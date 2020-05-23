import {connectionDev} from '../database/connect'

 export const validateUserByEmail = async (email,password) => {
  const userEmail = await connectionDev('users').select('email','id').where({email,password}).first()

  if(!userEmail){
    throw "Email ou Senha não correspondem"
  }


  return userEmail;


}
