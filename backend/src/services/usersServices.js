import { connectionDev } from '../database/connect'

export const insertUserOnDB = async fields =>
  connectionDev('users').returning('*').insert(fields)
