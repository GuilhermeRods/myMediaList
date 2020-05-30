export const seed = async knex => {
  await knex('media_type').del()
  await knex('media_type').insert([
    {
      id: knex.raw('uuid_generate_v4()'),
      type: 'Animes'
    },

    {
      id: knex.raw('uuid_generate_v4()'),
      type: 'Filmes'
    },

    {
      id: knex.raw('uuid_generate_v4()'),
      type: 'Series'
    },
  ])
}
