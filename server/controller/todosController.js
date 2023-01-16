const { default: mongoose } = require("mongoose");
const TodoModel = require("../models/TodoModel");

const getAll = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
  }

  try {
    const todo = await TodoModel.findById(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const create = async (req, res) => {
  const { text } = req.body;
  try {
    const todo = await TodoModel.create({ textItem: text, hasRead: false });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const update = async (req, res) => {
  const { id, text } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
  }

  try {
    const todo = await TodoModel.findByIdAndUpdate(
      id,
      {
        textItem: text,
      },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const markAsRead = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
  }

  try {
    const todo = await TodoModel.findByIdAndUpdate(
      id,
      {
        hasRead: true,
      },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

const remove = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404);
  }

  try {
    const todo = await TodoModel.findByIdAndDelete(id);
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  markAsRead,
  remove,
};
