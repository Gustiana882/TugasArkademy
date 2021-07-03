const express = require("express")
const route = express.Router()
const controller = require("../controllers/bag")

route.get('/',controller.getAllBag)
route.post('/', controller.addBag)

module.exports = route