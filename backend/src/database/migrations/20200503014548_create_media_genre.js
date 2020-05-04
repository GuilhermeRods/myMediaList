
export const up = knex => knex.schema.createTable('media_genre', table => {
  table.uuid('media_id').notNullable()
  table.uuid('genre_id').notNullable()

  table.foreign('media_id').references('id').inTable('medias'),
  table.foreign('genre_id').references('id').inTable('genres')

})

export const down = knex => knex.schema.dropTable('media_genre')
