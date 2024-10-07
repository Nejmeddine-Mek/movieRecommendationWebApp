const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiKey = `18ca1b4a`; // API key
const API = `http://www.omdbapi.com/?&apikey=${apiKey}`; // API

app.use(express.static('./public'))
app.use(express.json())

//here we handle get method from /search where we get daat the user searched for!
app.get('/search',async (req,res) => {
    try{
         // we get the query in the next line
        const value = req.query.query; 
         // here we fetch data we need
        const result =await fetch(`${API}&t=${value}`);
        if(!result.ok){ // if it is not ok, we return an error
            res.status(500).json({response: 0});
            return;
        } 
        // if not we send that data to the user;
        const data = await result.json();
        res.status(200).json(data);
       
    }
    catch(err){ // if we catch any errors we return them to display them in the front-end
        res.status(500).json({error: err});
    }

});

app.get('/movieRev' ,(req,res) =>{
    res.sendFile(path.join(__dirname,'public', 'movieRev.html'));
})
//we just host our page on port 3000
app.listen(PORT, () => console.log("connected to port "+ PORT));