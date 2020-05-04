import request from 'supertest'
import app from 'server'
import mediasFactory from './factories/medias-factory'
import mediaTypesFactory from './factories/media-type-factory'

describe('TEST USERS', () => {
  beforeEach(async () => {
    global.server = app.listen()
    global.mediaTypes = await mediaTypesFactory()
    global.medias = await mediasFactory()
  })

  afterEach(async () => {
    global.server.close()
  })

  describe('POST /medias', () => {
    test('should add a new media', async () => {
      const response = await request(global.server)
        .post('/medias')
        .set('Authorization', 'faketoken')
        .send({
          title: 'media test',
          description: 'description media test',
          totalRating: 2,
          mediaTypeId: global.mediaTypes[0].id
        })
      expect(response.status).toEqual(201)
      expect(response.type).toEqual('application/json')
      expect(Object.keys(response.body.message[0])).toEqual(
        expect.arrayContaining([
          'id',
          'title',
          'description',
          'total_rating',
          'media_type_id'
        ])
      )
    })
  })
})
