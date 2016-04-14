
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`sales`, (fooby) => {
    fooby.increments(`id`);

    fooby.integer(`gross_profit`);
    fooby.string(`date`);
    fooby.integer(`branch_id`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`sales`);
};
