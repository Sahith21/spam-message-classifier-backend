const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Simulated Spam Detection Logic
const checkSpam = (text) => {
  const spamKeywords = ["win", "free", "prize", "click", "subscribe"];
  return spamKeywords.some((word) => text.toLowerCase().includes(word));
};

// POST route to classify and save message
router.post("/classify", async (req, res) => {
  const { text } = req.body;
  const isSpam = checkSpam(text);

  const newMessage = new Message({ text, isSpam });
  await newMessage.save();

  res.json({ message: "Message classified", text, isSpam });
});

// GET route to fetch all messages
router.get("/messages", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;
