const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Order.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
  try {
    const ord = await Order.findById(req.params.id);
    if(!ord) res.status(404).json({ message: 'Not found' });
    else res.json(ord);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
    try {
        const { name, address, phoneNumber, email } = req.body;    
        const newOrder = new Order({ name, address, phoneNumber, email });
        await newOrder.save();
        res.json({ message: 'OK' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};