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

app.get('/api/characters', function(req,res){
    findAllCharacters(function(data){
        res.send(data)
    })
} );

app.get('/api/films', function(req,res){
    findAllFilms(function(data){
        res.send(data)
    })
} );

app.get('/api/character/:id', function(req,res){
    findCharacter(function(data){
        res.send(data)
    })
} );

app.get('/api/films/:id', function(req,res){
    findFilms(function(data){
        res.send(data)
    })
} );

app.get('/api/planets/:id', function(req,res){
    findPlanets(function(data){
        res.send(data)
    })
} );

app.get('/api/films/:id/characters', function(req,res){
    findAllFilms(function(data){
        res.send(data)
    })
} );

app.get('/api/films/:id/planets', function(req,res){
    findAllFilms(function(data){
        res.send(data)
    })
} );

app.get('/api/characters/:id/films', function(req,res){
    findAllFilms(function(data){
        res.send(data)
    })
} );

app.get('/api/planets/:id/films', function(req,res){
    findAllFilms(function(data){
        res.send(data)
    })
} );

app.get('/api/planets/:id/characters', function(req,res){
    findAllFilms(function(data){
        res.send(data)
    })
} );

app.listen(port);