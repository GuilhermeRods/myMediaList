export const up = knex =>
  knex.schema.createTable("medias", table => {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary()
    table.integer("media_api_id").unique()
    table.string("title").notNullable()
    table.text("description").notNullable()
    table.string("slug_title").notNullable()
    table.integer("total_rating")
    table.timestamps(true, true)
    table.timestamp("deleted_at")
    table.string("image_poster")
    table.string("image_cover")
    table.string("youtube_id")
    table.datetime("start_date")
    table.datetime("end_date")

    table.uuid("media_type_id").notNullable()

    table.foreign("media_type_id").references("id").inTable("media_types")
  })

export const down = knex => knex.schema.dropTable("medias")
