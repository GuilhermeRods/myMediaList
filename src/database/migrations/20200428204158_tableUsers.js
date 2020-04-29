
exports.up = knex => knex.schema.createTable('users',table => {
  table.string('nome');
});


exports.down = knex=> knex.schema.dropTable('users');

