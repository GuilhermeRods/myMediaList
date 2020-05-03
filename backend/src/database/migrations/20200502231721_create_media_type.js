
export const up = knex => knex.schema.createTable('media_type', table => {
  table.increments()
  table.string('type')
  table.timestamps(true, true)
  table.timestamp('deleted_at')
})

export const down = knex => knex.schema.dropTable('media_type')
