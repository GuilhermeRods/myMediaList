export const up = knex =>
  knex.schema.createTable("media_seasons", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary()
    table.uuid("media_id").notNullable()
    table.uuid("season_id").notNullable()

    table.timestamps(true, true)

    table.timestamp("deleted_at")
    table.foreign("media_id").references("id").inTable("medias")
    table.foreign("season_id").references("id").inTable("seasons")
  })

export const down = knex => knex.schema.dropTableIfExists("media_seasons")
