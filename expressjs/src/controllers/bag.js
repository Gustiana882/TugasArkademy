const bags = {};
const model = require('../models/bag');

bags.getAllBag = async (req, res) => {
  try {
    const getBag = await model.getAllBag();
    const json = getBag.map((bag) => {
      const totalPrice = bag.amount * bag.price;
      const object = {
        id: bag.id,
        product_id: bag.product_id,
        product_title: bag.title,
        product_store: bag.store,
        product_price: bag.price,
        amount: bag.amount,
        total_price: totalPrice,
        create_at: bag.create_at,
      };
      return object;
    });
    res.send(json);
  } catch (error) {
    res.send(error);
  }
};

bags.addBag = async (req, res) => {
  try {
    const bag = await model.addBag(req.body);
    res.send(bag);
  } catch (error) {
    res.send(error);
  }
};

bags.updateBag = async (req, res) => {
  try {
    const update = await model.updateBag(req.body);
    res.send(update);
  } catch (error) {
    res.send(error);
  }
};

bags.deleteBag = async (req, res) => {
  try {
    const delete1 = await model.deleteBag(req.body);
    res.send(delete1);
  } catch (error) {
    res.send(error);
  }
};

module.exports = bags;
