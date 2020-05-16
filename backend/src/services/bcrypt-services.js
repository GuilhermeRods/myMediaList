import bcrypt from 'bcrypt'

const saltRounds = 10

const saltKeys = '02Hm31nHC'

export const generatePasswordHashed = password =>
  bcrypt.hashSync(password, saltRounds, saltKeys)

export const verifyPassword = (passwordToCompare, password) =>
  bcrypt.compareSync(`${passwordToCompare}${saltKeys}`, password)
