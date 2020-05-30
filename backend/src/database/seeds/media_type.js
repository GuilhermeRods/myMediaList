export const seed = async knex => {
  await knex('media_type').del()
  await knex('media_type').insert([
    {
      type: 'Animes'
    },

    {
      type: 'Filmes'
    },

    {
      type: 'Series'
    },
  ])
}
