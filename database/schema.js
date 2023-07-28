const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  phone: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
