exports.up = function (knex) {
    return knex.schema.createTable('items', table => {
      table.increments('id').primary()
      table.string('item')
      table.string('image')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('items')
  }
  