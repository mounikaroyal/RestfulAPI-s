const mongobd =  require('mongodb')
const MongoClient = mongobd.MongoClient
// access to the function necesityy to connect to the database

const connectionURl = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

//connect to the database
MongoClient.connect(connectionURl, { useNewUrlParser:true }, (error,client) =>{

   //() => () is a call back function
if(error){
 return console.log('unable to connect to the database')
}
console.log('connected correctly')


const db = client.db(database)
// here database is the name of the db to manipulate
db.collection('users').insertOne({
name: 'nikki',
age: '23'

})

})