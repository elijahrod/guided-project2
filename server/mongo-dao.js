import mongodb, { MongoClient} from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "swapi";

async function dbConnect(){
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(dbName);
    return db;
}

export const findAllCharacters = async function(callback){
    let db = await dbConnect();
    let dataPromise = db.collection("characters").find({}).toArray();
    dataPromise.then((characters) => callback(characters));
   
}

export const findAllFilms = async function(callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films").find({}).toArray();
    dataPromise.then((films) => callback(films));
   
}

export const findAllPlanets = async function(callback){
        let db = await dbConnect();
         let dataPromise = db.collection("planets").find({}).toArray();
         dataPromise.then((planets) => callback(planets));
        
}

export const findCharacter = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("characters").findOne({'id':id});
    dataPromise.then((character) => callback(character));
   
}

export const findFilm = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films").findOne({'id':id});
    dataPromise.then((film) => callback(film));
   
}

export const findPlanet = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("planets").findOne({'id':id});
    dataPromise.then((planet) => callback(planet));
   
}

export const findAllCharactersfromFilm = async function(id, callback){
    let db = await dbConnect();
    let charactersAndFilm = db.collection("films_characters");//.find({'film_id': id});
    let dataPromise = charactersAndFilm.aggregate([
        {
            $match:{
                "film_id": +id
            }
        },
        {
            $lookup:{
                from: 'characters',
                localField: 'character_id',
                foreignField: 'id',
                as: 'charachtersFromFilm'
            }
        },
    ]).toArray();
    dataPromise.then((characters) => callback(characters));
}

export const findAllPlanetsfromFilm = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films_planets").find({'film_id': id}).toArray();
    dataPromise.then((planets) => callback(planets));
}

export const findAllFilmsfromCharacter = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films_characters").find({'character_id': id}).toArray();
    dataPromise.then((characters) => callback(characters));
}
export const findAllFilmsfromPlanets = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films_planets").find({'planet_id': id}).toArray();
    dataPromise.then((characters) => callback(characters));
}

export const findAllCharactersfromPlanets = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films_characters").find({'film_id': id}).toArray();
    dataPromise.then((characters) => callback(characters));
}
