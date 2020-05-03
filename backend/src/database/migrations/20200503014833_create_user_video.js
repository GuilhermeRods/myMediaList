
export const up = knex => knex.schema.createTable('user_video', table => {

  table.integer('stopped_at').notNullable()
  table.integer('views')

  table.integer('user_id').notNullable()
  table.integer('video_id').notNullable()

  table.foreign('user_id').references('id').inTable('users')
  table.foreign('video_id').references('id').inTable('videos')
})

export const down = knex => knex.schema.dropTable('user_video')