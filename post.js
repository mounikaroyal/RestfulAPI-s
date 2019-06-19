
const express = require("express");
require('./db/mongoose')
const app = express();
app.use(express.json());
const users = [
    
      { id: 1 , name: 'mouni' , num: "10" },
      { id: 2 , name:'mahi' },
      { id: 3 , name:'puppy' },
                                   
    ];

app.get('/' , (req , res) => {
    res.send("hello world")
})
app.get('/users', (req , res) => {
    res.send(users);
})

app.post('/users', (req , res) => {
    
    const user = {
        id: users.length + 1,
       firstname: req.body.firstname ,
       contact: req.body.contact,
       email: req.body.email
    }
    users.push(user)
    res.send(user)
})
.listen(3000)

console.log('server running at http://127.0.0.21:3000');