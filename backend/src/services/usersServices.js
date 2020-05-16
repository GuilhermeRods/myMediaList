import { connectionDev } from '../database/connect'

export const insertUserOnDB = async fields =>
  connectionDev('users').returning('*').insert(fields)

export const getUser = async fields =>
  connectionDev('users').select('id').where(fields)
