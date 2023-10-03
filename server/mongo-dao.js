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
export const findPlanet = function(callback){
    let dataPromise = collection.findOne({"id":id}).toArray();
    dataPromise.then((planet) => callback(planet));
   
}
export const findCharacter = function(callback){
    let dataPromise = collection.find({"id":id}).toArray();
    dataPromise.then((character) => callback(character));
   
}
export const findFilm = function(callback){
    let dataPromise = collection.find({"id":id}).toArray();
    dataPromise.then((film) => callback(film));
   
}
