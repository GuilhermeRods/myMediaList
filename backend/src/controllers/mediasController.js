import { insertMediaOnDB } from '../services/mediasServices'
import {
  sendCreated,
  sendErrorBadRequest
} from '../services/responseToUserServices'

const MediaController = {
  create: async ctx => {
    const { body } = ctx.request
    const fields = {
      title: body.title,
      description: body.description,
      total_rating: body.total_rating,
      media_type_id: body.media_type_id
    }
    try {
      const response = await insertMediaOnDB({ ...fields })
      sendCreated(ctx, response)
    } catch (err) {
      const message = 'It was not possible to create the media, try again'
      sendErrorBadRequest(ctx, message, err)
    }
  }
}

export default MediaController
