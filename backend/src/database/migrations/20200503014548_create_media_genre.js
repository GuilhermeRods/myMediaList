export const up = knex =>
  knex.schema.createTable("media_genres", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary()
    table.uuid("media_id").notNullable()
    table.integer("genre_api_id").notNullable()
    table.integer("media_api_id").notNullable()

    table.timestamp("deleted_at")

    table.foreign("genre_api_id").references("genre_api_id").inTable("genres")

    table.timestamps(true, true)
    table.foreign("media_id").references("id").inTable("medias")
  })

export const down = knex => knex.schema.dropTableIfExists("media_genres")
