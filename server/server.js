import express from "express"

//const mongodb = require("mongodb");
//const { MongoClient } = require('mongodb');
//const url = "mongodb://localhost:27017";
//const dbName = "swapi";

const app = express();
const port = 2020;
console.log(`Server is running on port ${port}`)
app.use(express.json())

app.get('/api/planets', function(req,res){
    let test = ['fake', 'test', 'object']
    res.send(test)
} )

app.listen(port);