const express = require('express')
const route = express.Router()
const controller = require("../controllers/product")
const category = require("../controllers/category")


route.get('/', controller.getAllProduct)
route.post('/', controller.addProduct)
route.delete('/', controller.deleteProduct)
route.put('/', controller.updateProduct)

route.get('/category', category.getAllCategory)
route.post('/category', category.addCategory)
route.delete('/category', category.deleteCategory)

module.exports = route