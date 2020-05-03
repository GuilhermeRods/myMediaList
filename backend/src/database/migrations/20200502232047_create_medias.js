
export const up = knex => knex.schema.createTable('medias', table => {
  table.increments()
  table.string('title')
  table.string('description')
  table.integer('total_rating')
  table.timestamps(true, true)
  table.timestamp('deleted_at')

  table.integer('media_type_id')

  table.foreign('media_type_id').references('id').inTable('media_type')
})

export const down = knex => knex.schema.dropTable('medias')
