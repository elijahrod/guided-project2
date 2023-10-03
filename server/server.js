import express from "express";

const app = express();
const port = 2020;

app.use(express.json())

app.get('/api/planets', function(req,res){
    let test = 'fake'
    return {test}
} )

app.listen(port);