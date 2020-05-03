
export const up = knex => knex.schema.createTable('users', table => {
  table.increments()
  table.string('name').notNullable()
  table.string('email').notNullable()
  table.string('password').notNullable()
  table.timestamps(true, true)
  table.timestamp('deleted_at')
})

export const down = knex => knex.schema.dropTable('users')
