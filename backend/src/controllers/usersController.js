import { insertUserOnDB } from '../services/usersServices'
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
      password: body.password,
    }
    try {
      const response = await insertUserOnDB({ ...fields })
      sendCreated(ctx, response)
    } catch (err) {
      const message = 'User could not be created, please try again'
      sendErrorBadRequest(ctx, message, err)
    }
  }
}

export default UserController
