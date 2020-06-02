export const up = knex =>
  knex.schema.createTable('videos', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.string('title').notNullable()
    table.integer('video_number').notNullable()
    table.timestamps(true, true)
    table.timestamp('deleted_at')
    table.string('image')
    table.text('description')
    table.datetime('airdate')

    table.uuid('media_id').notNullable()

    table.foreign('media_id').references('id').inTable('medias')
  })

export const down = knex => knex.schema.dropTable('videos')
