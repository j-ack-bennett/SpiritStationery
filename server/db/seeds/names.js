
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('names').del()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {id: 1, name: 'john', item_id: 10},
        {id: 2, name: 'sally', item_id: 13},
        {id: 3, name: 'paul', item_id: 9}
      ])
    })
}
