export const up = knex => knex.schema.createTable('seasons', table => {
  table.uuid()
  table.string('number_season').notNullable()
  table.text('description').notNullable()
  table.timestamps(true, true)
  table.timestamp('deleted_at')

})

export const down = knex => knex.schema.dropTable('seasons')
