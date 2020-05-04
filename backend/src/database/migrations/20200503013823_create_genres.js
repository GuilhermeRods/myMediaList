export const up = knex =>
  knex.schema.createTable('genres', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.string('name').notNullable()
    table.timestamps(true, true)
    table.timestamp('deleted_at')
  })

export const down = knex => knex.schema.dropTable('genres')
