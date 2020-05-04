import mediaTypesFactory from './media-type-factory'
import { connectionDev } from '../../src/database/connect'
import generateString from '../../src/services/generateStringService'

const mediasFactory = async () => {
  const mediaTypes = await mediaTypesFactory()
  const medias = await connectionDev('medias').returning('*').insert({
    title: generateString(),
    description: generateString(),
    total_rating: 11,
    media_type_id: mediaTypes[0].id
  })
  return medias
}

export default mediasFactory
