const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW' ],
        required: "Please set HIGH, MEDIUM or LOW"
    },
    dateAdded: Date,
    dateUpdated: Date
});

module.exports = mongoose.model("note", noteSchema);

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated