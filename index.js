const express = require("express");
const app = express();

app.get('/' , (req , res) => {
    res.send("hello world")
})
    app.get('/api/users' , (req , res) => {
        res.send([ mouni = 2 , nikki = 5]);
    
}).listen(8000)
console.log('server running at http://127.0.0.21:8000');