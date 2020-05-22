import bcrypt from 'bcrypt'

const saltRounds = 10

const saltKeys = '02Hm31nHC'

export const generatePasswordHashed = password =>
  bcrypt.hashSync(`${password}${saltKeys}`, saltRounds)

export const verifyPassword = (passwordToCompare, password) =>
  bcrypt.compareSync(`${passwordToCompare}${saltKeys}`, password)
