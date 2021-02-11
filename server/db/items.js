const connection = require('./connection')

function getItems(db = connection) {
  return db('items').select()
}
function getNamesAndItems(db = connection){
  return db('items')
  .join('names', 'items.id', 'names.item_id' )
  .select('*', 'names.id AS id')
}
function addName(name, item_id, db = connection){
  return db('names')
  .insert({name:name, item_id:item_id})
}

module.exports = {
  getItems,
  getNamesAndItems,
  addName
}
