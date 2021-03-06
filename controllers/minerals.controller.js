const Mineral = require('../models/mineral.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Mineral.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
  try {
    const miner = await Mineral.findById(req.params.id);
    if(!miner) res.status(404).json({ message: 'Not found' });
    else res.json(miner);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
