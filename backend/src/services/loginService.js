import { connectionDev } from '../database/connect'
import { verifyPassword } from '../services/bcrypt-services'

export const validateUserByEmail = async (currentEmail, currentPassword) => {
  if (!currentPassword || !currentEmail) {
    throw 'Preencha todos os campos'
  }

  const { id, email, password } = await connectionDev('users')
    .select('email', 'id', 'password')
    .where({ email: currentEmail })
    .first()

  if (!email) {
    throw 'Email ou Senha não correspondem'
  }

  const isValid = verifyPassword(currentPassword, password)
  if (!isValid) {
    throw 'Email ou Senha não correspondem'
  }

  return { id, email }
}
