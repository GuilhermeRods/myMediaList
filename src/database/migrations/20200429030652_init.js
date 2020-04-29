export const up = knex => knex.schema.createTable('users', table => {
    table.increments()
    table.string('name')
    table.string('email')
    table.integer('password')
})

export const down = knex => knex.schema.dropTable('users')