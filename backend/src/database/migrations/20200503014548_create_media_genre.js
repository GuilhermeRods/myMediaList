
export const up = knex => knex.schema.createTable('media_genre', table => {
  table.integer('media_id')
  table.integer('genre_id')

  table.foreign('media_id').references('id').inTable('medias'),
  table.foreign('genre_id').references('id').inTable('genres')

})

export const down = knex => knex.schema.dropTable('media_genre')
