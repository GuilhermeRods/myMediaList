
export const up = knex => knex.schema.createTable('user_media', table => {

  table.integer('rating')
  table.timestamps(true, true)
  table.timestamp('deleted_at')

  table.integer('user_id')
  table.integer('media_id')

  table.foreign('user_id').references('id').inTable('users')
  table.foreign('media_id').references('id').inTable('medias')
})

export const down = knex => knex.schema.dropTable('user_media')
