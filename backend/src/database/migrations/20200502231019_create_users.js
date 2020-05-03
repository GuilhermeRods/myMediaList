
export const up = knex => knex.schema.createTable('users', table => {
  table.increments()
  table.string('name')
  table.string('email')
  table.string('password')
  table.timestamps(true, true)
  table.timestamp('deleted_at')
})

export const down = knex => knex.schema.dropTable('users')
