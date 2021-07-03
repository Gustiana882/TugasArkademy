const category = {}
const model = require("../models/category")

category.getAllCategory = async (req, res) => {
    try{
        const allCategory = await model.getAllCategory()
        res.send(allCategory)
    }catch(error){
        res.send(error)
    }
}

category.getCategoryById = async (req, res) => {
    try{
        const allCategory = await model.getCategoryById()
        res.send(allCategory)
    }catch(error){
        res.send(error)
    }
}

category.addCategory = async (req, res) => {
    try{
        const allCategory = await model.addCategory(req.body)
        res.send(allCategory)
    }catch(error){
        res.send(error)
    }
}

category.deleteCategory = async (req, res) => {
    try{
        const allCategory = await model.deleteCategory(req.body)
        res.send(allCategory)
    }catch(error){
        res.send(error)
    }
}

module.exports = category