import { insertUserOnDB, getUserById, updateUserOnDB } from '../services/usersServices'
import {
  sendCreated,
  sendErrorBadRequest,
  sendSucess
} from '../services/responseToUserServices'

const UserController = {
  create: async ctx => {
    const { body } = ctx.request
    const fields = {
      name: body.name,
      email: body.email,
      password: body.password
    }
    try {
      const response = await insertUserOnDB({
        ...fields
      })
      sendCreated(ctx, response)
    } catch (err) {
      const message = 'User could not be created, please try again'
      sendErrorBadRequest(ctx, message, err)
    }
  },
  show: async ctx => {
    try {
      const response = await getUserById(ctx.params.id)
      sendSucess(ctx, response)
    } catch (error) {
      sendErrorBadRequest(ctx, error)
    }
  },
  update: async ctx => {
    const { body } = ctx.request
    const fields = {
            name: body.name,
            email: body.email,
            password: body.password
          }
    try {
      const response = await updateUserOnDB(
        ctx.params.id,{
        ...fields
      })
      sendSucess(ctx, response)
    } catch (err) {
      const message = 'User could not be updated, please try again'
      sendErrorBadRequest(ctx, message, err)
    }
  }
}

export default UserController
