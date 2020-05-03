export const up = knex => knex.schema.createTable('videos', table => {
  table.increments()
  table.string('title')
  table.integer('video_number')
  table.timestamps(true, true)
  table.timestamp('deleted_at')

  table.integer('media_id')

  table.foreign('media_id').references('id').inTable('medias')
})

export const down = knex => knex.schema.dropTable('videos')
