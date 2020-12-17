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
    const con = await Mineral.findById(req.params.id);
    if(!con) res.status(404).json({ message: 'Not found' });
    else res.json(con);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
