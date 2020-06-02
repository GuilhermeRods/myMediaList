import uuidv4 from 'uuid/dist/v4'

export const seed = async knex => {
  const age_ratings = [
    {
      id: uuidv4(),
      type: 'G',
      description: 'General Audiences'
    },
    {
      id: uuidv4(),
      type: 'PG',
      description: 'Parental Guidance Suggested'
    },
    {
      id: uuidv4(),
      type: 'R',
      description: 'Restricted'
    },
    {
      id: uuidv4(),
      type: 'R18',
      description: 'Explicit'
    }
  ]

  await knex('age_ratings').del()
  await knex('age_ratings').insert(age_ratings)
}
