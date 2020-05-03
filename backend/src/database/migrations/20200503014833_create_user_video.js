
export const up = knex => knex.schema.createTable('user_video', table => {

  table.integer('stopped_watching_on')
  table.integer('total_views')

  table.integer('user_id')
  table.integer('video_id')

  table.foreign('user_id').references('id').inTable('users')
  table.foreign('video_id').references('id').inTable('videos')
})

export const down = knex => knex.schema.dropTable('user_video')
