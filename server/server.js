import express from "express"
import { findAllPlanets, findAllCharacters, findAllFilms, findPlanet, findCharacter, findFilm, findAllPlanetsfromFilm, findAllCharactersfromFilm } from './mongo-dao.js';


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
    findFilm(+req.params.id, 
        (film) => {
            if (!film){
                res.status(404).end();
            }
            else {
                res.send(film);
            }
        })
});

app.get('/api/planets/:id', function(req,res){
    findPlanet(+req.params.id, 
        (planet) => {
            if (!planet){
                res.status(404).end();
            }
            else {
                res.send(planet);
            }
        })
});

app.get('/api/characters/:id', function(req,res){
    findCharacter(+req.params.id, 
        (character) => {
            if (!character){
                res.status(404).end();
            }
            else {
                res.send(character);
            }
        })
});

app.get('/api/films/:id/planets', function(req,res){
    findAllPlanetsfromFilm(+req.params.id, 
        (planets) => {
            if (!planets){
                res.status(404).end();
            }
            else {
<<<<<<< HEAD

                res.send(film);
=======
                res.send(planets);
>>>>>>> 42e2bff500d06016af6b740dce59a41394c4208c
            }
        })
} );

app.get('/api/films/:id/characters', function(req,res){
    findAllCharactersfromFilm(+req.params.id, 
        (characters) => {
            if (!characters){
                res.status(404).end();
            }
            else {
                res.send(characters);
            }
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