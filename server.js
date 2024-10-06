const express = require('express');
const app = express();
const PORT = 3000;
const apiKey = `18ca1b4a`;
const API = `htpp://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

app.use(express.static('./public'))
app.use(express.json())


app.listen(PORT, () => console.log("connected to port "+ PORT));