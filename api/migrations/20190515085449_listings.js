exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', table => {
    table.increments();
    table.string('street_address');
    table.string('city');
    table.integer('zip_code');
    table.text('state');
    table.string('image_url');
    table.string('home_type');
    table.decimal('price');
    table.text('description');
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings');
};
