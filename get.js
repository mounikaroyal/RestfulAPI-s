const express = require("express");
const app = express();

const users = [
    
      { id: 1 , name: 'mouni' },
      { id: 2 , name:'mahi' },
      { id: 3 , name:'puppy' },
                                   
    ];

app.get('/' , (req , res) => {
    res.send("hello world")
})
    app.get('/api/users' , (req , res) => {
        res.send(users);
    });
    app.get('/api/users/:id' , (req , res) => {
     const user =  users.find(c => c.id === parseInt(req.params.id));
     if (!user) res.status(404).send('The users code is not visible.');
    res.send(user);
    })
    // app.get('/api/posts/:year/:month' , (req , res)  => {
    //     res.send(req.params)
    // });
.listen(8000)
console.log('server running at http://127.0.0.21:8000');