export const sendCreated = (ctx, message) => {
  ctx.body = {
    message
  }
  ctx.status = 201
}

export const sendErrorBadRequest = (ctx, message, errorMessage) => {
  ctx.body = {
    message,
    errorMessage
  }
  ctx.status = 400
}

export const sendErrorNotFound = (ctx, message, errorMessage) => {
  ctx.body = {
    message,
    errorMessage
  }
  ctx.status = 404
}

export const sendErrorUnauthorized = (ctx, message, errorMessage) => {
  ctx.body = {
    message,
    errorMessage
  }
  ctx.status = 401
}
