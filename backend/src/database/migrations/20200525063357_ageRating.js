export const up = knex =>
  knex.schema
    .createTable('age_ratings', table => {
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
      table.string('type')
      table.string('description')
    })
    .alterTable('medias', table => table.uuid('age_rating_id'))

export const down = knex =>
  knex.schema
    .alterTable('medias', table => table.dropColumn('age_rating_id'))
    .dropTable('age_ratings')
