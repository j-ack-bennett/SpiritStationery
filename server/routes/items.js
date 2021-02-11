const express = require('express')

const db = require('../db/items')

const router = express.Router()

router.get('/', (req, res) => {
  db.getItems()
    .then(results => {
      res.json({ results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/itemsandnames', (req, res) => {
  db.getNamesAndItems()
    .then(results => { 
      console.log(results)
      res.json({ results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/itemsandnames', (req, res) => {
  const name = req.body.name
  const item_id = req.body.item_id
  db.addName(name, item_id)
    .then(()=> {
      res.status(200)
      return null //delete?
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})


module.exports = router
