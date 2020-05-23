import {
  connectionDev
} from '../database/connect'

export const listUser = async (id) => {
  const user = await connectionDev('users').select('id', 'name', 'email').where({
    id
  }).first()

  if (!user) {
    throw "Id não correspondem a um usuario cadastrado !"
  }

  return user;

}
