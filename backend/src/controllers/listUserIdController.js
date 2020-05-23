import {
  listUser
} from '../services/listUserIdService'
import {
  sendSucess,
  sendErrorBadRequest
} from '../services/responseToUserServices'

const listUserIdController = {
  listUser: async ctx => {
    const {
      body
    } = ctx.request
    try {
      const request = await listUser(body.id);
      sendSucess(request)

    } catch (error) {
      sendErrorBadRequest(ctx, error);

    }
  }

}


export default listUserIdController;
