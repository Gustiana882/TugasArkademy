const products = {};
const model = require('../models/product');
const categorymodel = require('../models/category');

products.getAllProduct = async (req, res) => {
  try {
    const allProduct = await model.getAllProduct();
    const json = allProduct.map((product) => {
      const object = {
        id_product: product.id,
        title: product.title,
        category: [{
          id: product.category_id,
          name: product.category_name,
        }],
        price: product.price,
        store: product.store,
        review: product.review,
        star: product.star,
        image: product.image,
        create_at: product.create_at,
        update_at: product.update_at,
      };
      return object;
    });
    res.send(json);
  } catch (error) {
    res.send(error);
  }
};

products.addProduct = async (req, res) => {
  try {
    const category = await categorymodel.getCategoryById(req.body.category);

    if (!category[0]) {
      res.send({ message: 'Category ID not found!' });
    } else {
      const respons = await model.addProduct(req.body);
      res.send(respons);
    }
  } catch (error) {
    res.send(error);
  }
};

products.updateProduct = async (req, res) => {
  try {
    const cekid = await model.getProductById(req.body.id);
    if (!cekid[0]) {
      res.send({ message: 'ID not found' });
    } else {
      const respons = await model.updateProduct(req.body);
      res.send(respons);
    }
  } catch (error) {
    res.send(error);
  }
};

products.deleteProduct = async (req, res) => {
  try {
    const respons = await model.deleteProduct(req.body);
    res.send(respons);
  } catch (error) {
    res.send(error);
  }
};

products.searchProduct = async (req, res) => {
  try {
    const allProduct = await model.searchProduct(req.params);
    const json = allProduct.map((search) => {
      const object = {
        id_search: search.id,
        title: search.title,
        category: [{
          id: search.category_id,
          name: search.category_name,
        }],
        price: search.price,
        store: search.store,
        review: search.review,
        star: search.star,
        image: search.image,
        create_at: search.create_at,
        update_at: search.update_at,
      };
      return object;
    });
    res.send(json);
  } catch (error) {
    res.send(error);
  }
};

module.exports = products;
