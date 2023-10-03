import mongodb, { MongoClient} from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "swapi";

async function dbConnect(){
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(dbName);
    return db;
}

export const findAllPlanets = async function(callback){
        let db = await dbConnect();
         let dataPromise = db.collection("planets").find({}).toArray();
         dataPromise.then((planets) => callback(planets));
        
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
export const findPlanet = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("planets").findOne({"id":id});
    dataPromise.then((planet) => callback(planet));
   
}
export const findCharacter = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("characters").findOne({'id':id});
    console.log("hello..")
    dataPromise.then((character) => callback(character));
   
}
export const findFilm = async function(id, callback){
    let db = await dbConnect();
    let dataPromise = db.collection("films").findOne({'id':id});
    dataPromise.then((film) => callback(film));
   
}
