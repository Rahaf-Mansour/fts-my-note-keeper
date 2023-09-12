const express = require("express");
const router = express.Router();
const Note = require("../models/note-model.js");

// Getting all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Getting one note by id
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating a new one
router.post("/", (req, res) => {});

// Updating one note by id
router.patch("/:id", (req, res) => {});

// Deleting one note by id
router.delete("/:id", (req, res) => {});
module.exports = router;
