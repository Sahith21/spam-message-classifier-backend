const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: String,
  isSpam: Boolean,
});

module.exports = mongoose.model("Message", MessageSchema);
