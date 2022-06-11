const express = require ("express");
const index = require ("./routes/index.js"); 
const livros = require ("./routes/livros.js");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/livros", livros);

module.exports = app;