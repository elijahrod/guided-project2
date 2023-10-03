import mongodb, { MongoClient} from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "swapi";
const collectionName = "planets";
let collection;

async function startup(){
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName);
    collection = db.collection(collectionName);
}
startup();

export const findAllPlanets = function(callback){
         let dataPromise = collection.find({}).toArray();
         dataPromise.then((planets) => callback(planets));
        
}
export const findAllCharacters = function(callback){
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((characters) => callback(characters));
   
}
export const findAllFilms = function(callback){
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((films) => callback(films));
   
}
export const findPlanet = function(id, callback){
    let dataPromise = collection.findOne({"id":id});
    dataPromise.then((planet) => callback(planet));
   
}
export const findCharacter = function(id, callback){
    let dataPromise = collection.find({"id":id});
    dataPromise.then((character) => callback(character));
   
}
export const findFilm = function(id, callback){
    let dataPromise = collection.find({"id":id});
    dataPromise.then((film) => callback(film));
   
}
