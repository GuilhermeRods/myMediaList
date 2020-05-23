import {
  validateUserByEmail
} from '../services/loginService'
import {
  sendSucess,
  sendErrorBadRequest
} from '../services/responseToUserServices'
import generateToken from '../services/AuthJwtService'

const loginController = {
  login: async ctx => {
    const {
      body
    } = ctx.request
    try {
      const response = await validateUserByEmail(body.email, body.password);
      const token = await generateToken(response.id);


      sendSucess(ctx, {
        ...response,
        token
      })

    } catch (error) {
      sendErrorBadRequest(ctx, error);

    }
  }

}


export default loginController;
