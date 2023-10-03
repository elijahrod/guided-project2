import './App.css';
import { Characters } from './Characters';
import { useEffect } from 'react';

function renderCharacters(){
  
  let id = 1;
  const baseUrl = "http://localhost:2020/api";

    async function getCharacter(id) {
      let character;
      try {
        character = await fetchCharacter(id)
        character.homeworld = await fetchHomeworld(character)
        character.films = await fetchFilms(character)
      }
      catch (ex) {
        console.error(`Error reading character ${id} data.`, ex.message);
      }
      return character
    }

    async function fetchCharacter(id) {
      let characterUrl = `${baseUrl}/characters/${id}`;
      return await fetch(characterUrl)
        .then(res => res.json())
    }

    async function fetchHomeworld(character) {
      const url = `${baseUrl}/planets/${character?.homeworld}`;
      const planet = await fetch(url)
        .then(res => res.json())
      return planet;
    }

    async function fetchFilms(character) {
      const url = `${baseUrl}/characters/${character?.id}/films`;
      const films = await fetch(url)
        .then(res => res.json())
      return films;
    }
    let characterName = getCharacter(id).name;
useEffect(getCharacter(id),[])
}



function App() {
  return (
    <div className="App">
      <Characters name={characterName}/>
    </div>
  );
}

export default App;
