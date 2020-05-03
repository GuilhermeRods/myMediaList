export const up = knex => knex.schema.createTable('genres', table => {
  table.increments()
  table.integer('name')
  table.timestamps(true, true)
  table.timestamp('deleted_at')

})

export const down = knex => knex.schema.dropTable('genres')
