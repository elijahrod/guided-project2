import express from "express"
import { findAllPlanets } from './mongo-dao.js';


const app = express();

const port = 2020;
console.log(`Server is running on port ${port}`)
app.use(express.json())

app.get('/api/planets', function(req,res){
    findAllPlanets(function(data){
        res.send(data)
    })
} );

app.listen(port);