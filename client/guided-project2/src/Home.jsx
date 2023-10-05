import { useEffect, useState } from "react";


export function Home () {
    const [characters, setCharacters] = useState([]);
    const getCharacters = async () => {
        
        await fetch("http://localhost:2020/api/characters")
            .then((response) => {
                if(!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => setCharacters(data))
            // .then(console.log(typeof(characters)))
            // .then(console.log(characters));
            
        
    }
    useEffect(() => {getCharacters()}, []);

    // const allCharacters = characters.map((character, index) => { 
    //     <li key={index}>{character.name}</li>
    // })

    return (
        <div>
            <h1>Star Wars Characters</h1>
            <ul>
                {characters}
            </ul>
        </div>
    )
}