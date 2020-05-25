import uuidv4 from 'uuid/dist/v4'
import moment from 'moment'

export const seed = async knex => {
  const mediaTypes = [
    {
      id: uuidv4(),
      type: 'anime',
      created_at: moment.utc(),
      updated_at: moment.utc()
    },
    {
      id: uuidv4(),
      type: 'movie',
      created_at: moment.utc(),
      updated_at: moment.utc()
    },
    {
      id: uuidv4(),
      type: 'tv_show',
      created_at: moment.utc(),
      updated_at: moment.utc()
    },
    {
      id: uuidv4(),
      type: 'mangá',
      created_at: moment.utc(),
      updated_at: moment.utc()
    }
  ]

  await knex('media_types').del()
  await knex('media_types').insert(mediaTypes)
}
