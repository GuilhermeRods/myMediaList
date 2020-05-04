import { connectionDev } from '../database/connect'

export const insertMediaOnDB = async fields =>
  connectionDev('medias').returning('*').insert(fields)
