
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
    
    const user = {
        id: users.length + 1,
        name:req.body.name ,
        num:req.body.num
    }
    users.push(user)
    res.send(user)
})
.listen(3000)

console.log('server running at http://127.0.0.21:3000');