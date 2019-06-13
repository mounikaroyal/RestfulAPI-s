const joi = require('joi')
const express = require("express");
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
app.get('/api/users', (req , res) => {
    res.send(users);
})

app.post('/api/users', (req , res) => {
    const schema = {
        name: joi.string().min(3).required()
    };
    const result = joi.validate(req.body ,schema);
   if (result.error) {
       res.status(400).send(result.error.details[0].message);
       return;
   }

    const user = {
        id: users.length + 1,
        name:req.body.name,
        
    }
    users.push(user)
    res.send(user)
})
app.put('/api/users', (req, res) => {

})
.listen(3000)

console.log('server running at http://127.0.0.21:3000');