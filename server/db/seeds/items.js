exports.seed = function (knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 1, item: '', image: ''},
        { id: 2, item: '', image: ''},
        { id: 3, item: '', image: ''}
      ])
    })
}
