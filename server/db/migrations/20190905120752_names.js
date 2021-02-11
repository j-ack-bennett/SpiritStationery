exports.up = function (knex) {
  return knex.schema.createTable('names', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('item_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('names')
}
