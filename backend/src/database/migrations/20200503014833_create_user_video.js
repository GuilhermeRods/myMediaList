export const up = knex =>
  knex.schema.createTable('user_videos', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    table.integer('stopped_at').notNullable()
    table.integer('views')
    table.timestamps(true, true)
    table.timestamp('deleted_at')

    table.uuid('user_id').notNullable()
    table.uuid('video_id').notNullable()

    table.foreign('user_id').references('id').inTable('users')
    table.foreign('video_id').references('id').inTable('videos')
  })

export const down = knex => knex.schema.dropTable('user_videos')
