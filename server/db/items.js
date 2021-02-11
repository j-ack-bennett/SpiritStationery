const connection = require('./connection')

function getItems(db = connection) {
  return db('items').select()
}
function getNamesAndItems(db = connection){
  return db('items')
  .join('names', 'items.id', 'names.item_id' )
  .select('*', 'name.id AS id')
}

module.exports = {
  getItems,
  getNamesAndItems
}
