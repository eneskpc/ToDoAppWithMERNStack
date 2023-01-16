const mongoose = require("mongoose");

const schema = mongoose.Schema;

const todoSchema = schema(
  {
    textItem: {
      type: String,
      require: true,
    },
    hasRead: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
