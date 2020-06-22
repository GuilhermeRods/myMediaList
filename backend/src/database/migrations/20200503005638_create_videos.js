export const up = knex =>
  knex.schema.createTable("videos", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary()
    table.string("episode_api_id")
    table.string("title")
    table.integer("video_number").notNullable()
    table.timestamp("deleted_at")
    table.string("image")
    table.text("description")
    table.datetime("airdate")

    table.uuid("media_id").notNullable()
    table.integer("media_api_id")
    table.timestamps(true, true)
    table.foreign("media_api_id").references("media_api_id").inTable("medias")

    table.foreign("media_id").references("id").inTable("medias")
  })

export const down = knex => knex.schema.dropTableIfExists("videos")
