export const up = knex =>
  knex.schema.createTable("user_medias", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary()

    table.integer("rating")
    table.timestamps(true, true)
    table.timestamp("deleted_at")

    table.uuid("user_id").notNullable()
    table.uuid("media_id").notNullable()

    table.foreign("user_id").references("id").inTable("users")
    table.foreign("media_id").references("id").inTable("medias")
  })

export const down = knex => knex.schema.dropTable("user_medias")
