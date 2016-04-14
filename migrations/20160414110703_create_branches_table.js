exports.up = function(knex, Promise) {
  return knex.schema.createTable(`branches`, (table) => {
    table.increments(`id`);

    table.string(`location`);
    table.integer(`branch_number`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`branches`);
};
