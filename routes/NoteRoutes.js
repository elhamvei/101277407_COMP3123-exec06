const express = require("express")
const NoteModel = require('../models/NotesModel');
const routes = express.Router()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    try {
        const obj = { ...req.body };
        obj.dateAdded = new Date()
        obj.dateUpdated = new Date()
        const newNote = new NoteModel(obj);
        await newNote.save()
        res.status(200).send(newNote)
    } catch (error) {
        res.status(500).send(error)
    }
}
);

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    try {
        const notes = await NoteModel.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(500).send(error)
    }
 });

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const findNote = await NoteModel.findById(req.params.noteId, obj,{ runValidators: true } )
        res.status(200).send(findNote)
    } catch (error) {
        res.status(500).send(error)
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const obj = { ...req.body };
        obj.dateUpdated = new Date()
        const updateNote = await NoteModel.findByIdAndUpdate(req.params.noteId, obj,{ runValidators: true } )
        res.status(200).send(updateNote)
    } catch (error) {
        res.status(500).send(error)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const deletedNote = await NoteModel.findByIdAndDelete(req.params.noteId, req.body)
        res.status(200).send(deletedNote)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = routes
