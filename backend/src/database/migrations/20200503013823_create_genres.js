export const up = knex =>
  knex.schema.createTable("genres", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary()
    table.integer("genre_api_id").unique().notNullable()
    table.string("name_es").notNullable()
    table.string("name_pt").notNullable()
    table.string("slug").notNullable()
    table.timestamps(true, true)
    table.timestamp("deleted_at")
  })

export const down = knex => knex.schema.dropTableIfExists("genres")
