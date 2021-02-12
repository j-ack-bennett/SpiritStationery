
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('names').del()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {id: 1, name: 'Jim', item_id: 9},
        {id: 2, name: 'Pam', item_id: 20},
        {id: 3, name: 'Michael', item_id: 10}
      ])
    })
}
