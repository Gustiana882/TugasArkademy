const category = {};
const model = require('../models/category');
const response = require('../helpers/response');

category.getAllCategory = async (req, res) => {
  try {
    const allCategory = await model.getAllCategory();
    response(res, 200, allCategory);
  } catch (error) {
    response(res, 400, error);
  }
};

category.getCategoryById = async (req, res) => {
  try {
    const allCategory = await model.getCategoryById();
    response(res, 200, allCategory);
  } catch (error) {
    response(res, 400, error);
  }
};

category.addCategory = async (req, res) => {
  try {
    const allCategory = await model.addCategory(req.body);
    response(res, 200, allCategory);
  } catch (error) {
    response(res, 400, error);
  }
};

category.updateCategory = async (req, res) => {
  try {
    const update = await model.updateCategory(req.body);
    response(res, 200, update);
  } catch (error) {
    response(res, 400, error);
  }
};

category.deleteCategory = async (req, res) => {
  try {
    const allCategory = await model.deleteCategory(req.body);
    response(res, 200, allCategory);
  } catch (error) {
    response(res, 400, error);
  }
};

module.exports = category;
