import uuidv4 from 'uuid/dist/v4'
import moment from 'moment'

export const seed = async knex => {
  const mediaTypes = [
    {
      id: '795177df-344e-4cde-8db2-c04c47bf459b',
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
