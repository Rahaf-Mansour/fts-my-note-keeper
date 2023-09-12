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
router.post("/", async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Updating one note by id
router.patch("/:id", (req, res) => {});

// Deleting one note by id
router.delete("/:id", (req, res) => {});
module.exports = router;
