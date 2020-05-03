
export const up = knex => knex.schema.createTable('media_season', table => {
  table.integer('media_id').notNullable()
  table.integer('season_id').notNullable()

  table.foreign('media_id').references('id').inTable('medias'),
  table.foreign('season_id').references('id').inTable('seasons')

})

export const down = knex => knex.schema.dropTable('media_season')
