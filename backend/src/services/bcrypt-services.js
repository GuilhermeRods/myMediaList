import bcrypt from 'bcrypt'

const saltKeys = '02Hm31nHCu'

export const generatePasswordHashed = password =>
  bcrypt.hashSync(password, saltKeys)

export const verifyPassword = (passwordToCompare, password) =>
  bcrypt.compareSync(`${passwordToCompare}${saltKeys}`, password)
