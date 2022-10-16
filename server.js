const express = require('express');
const mongoose = require('mongoose');
const notesRoutes = require("./routes/NoteRoutes")

const SERVER_PORT = 3002

const DB_URL = "mongodb+srv://elhamvei:elham142ev@cluster0.quqgho6.mongodb.net/Assigment06?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const app = express();
app.use(express.json())
app.use(express.urlencoded())

app.use("/notebook/", notesRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening at http://localhost:${SERVER_PORT}/`);
});
