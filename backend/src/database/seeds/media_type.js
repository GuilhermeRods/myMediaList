export const seed = async knex => {
  await knex('media_type').del()
  await  knex('media_type').insert([
    {
      id: knex.raw('uuid_generate_v4()'),
      type: 'Animes',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    },

    {
      id: knex.raw('uuid_generate_v4()'),
      type: 'Filmes',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    },

    {
      id: knex.raw('uuid_generate_v4()'),
      type: 'Series',
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    },
  ])
}
