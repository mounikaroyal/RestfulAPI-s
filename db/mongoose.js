const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
   useNewUrlParser: true,
   useCreateIndex: true
})

const hellos = mongoose.model('hellos', {
   description: {
       type: String,
       required: true,
       trim: true
   },
   completed: {
       type: Boolean,
       default: false
   }
})