'use strict';

exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('nome');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
//# sourceMappingURL=20200428204158_tableUsers.js.map