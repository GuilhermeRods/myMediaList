import { insertUserOnDB } from '../services/usersServices'
import { generatePasswordHashed } from '../services/bcrypt'
import {
  sendCreated,
  sendErrorBadRequest
} from '../services/responseToUserServices'

const UserController = {
  create: async ctx => {
    const { body } = ctx.request
    const fields = {
      name: body.name,
      email: body.email,
      password: generatePasswordHashed(body.password)
    }
    try {
      const verifyEmail = await insertUserOnDB('users')
                                .where('email', email)
                                .first()
      if(!verifyEmail) {
        const response = await insertUserOnDB({ ...fields })
        sendCreated(ctx, response)
      }
    } catch (err) {
      const message = 'User could not be created, please try again'
      sendErrorBadRequest(ctx, message, err)
    }
  }
}

export default UserController
