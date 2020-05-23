import { connectionDev } from '../database/connect'
import { generatePasswordHashed } from '../services/bcrypt-services'

export const insertUserOnDB = async fields => {
  const { name, email, password } = fields
  if (!name || !email || !password) throw 'incorrects data'
  const passwordHashed = generatePasswordHashed(password)
  return connectionDev('users').returning('*').insert({
    name,
    email,
    password: passwordHashed
  })
}
export const getUser = async fields =>
  connectionDev('users').select('id').where({
    fields
  })

export const getUserById = async id => {
  const user = await connectionDev('users')
    .select('id', 'name', 'email')
    .where({
      id
    })
    .first()
  if (!user) {
    throw 'Id não correspondem a um usuario cadastrado !'
  }

  return user
}
