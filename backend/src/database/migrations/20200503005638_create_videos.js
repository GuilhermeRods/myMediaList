export const up = knex => knex.schema.createTable('videos', table => {
  table.uuid('id').primary()
  table.string('title').notNullable()
  table.integer('video_number').notNullable()
  table.timestamps(true, true)
  table.timestamp('deleted_at')

  table.uuid('media_id').notNullable()

  table.foreign('media_id').references('id').inTable('medias')
})

export const down = knex => knex.schema.dropTable('videos')
