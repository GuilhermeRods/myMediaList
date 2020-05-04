import { connectionDev } from '../../src/database/connect'
import generateString from '../../src/services/generateStringService'

const mediaTypesFactory = async () => {
  const mediaTypes = await connectionDev('media_type').returning('*').insert({
    type: generateString()
  })

  return mediaTypes
}

export default mediaTypesFactory
