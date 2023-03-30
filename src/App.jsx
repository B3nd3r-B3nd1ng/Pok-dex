import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard.jsx'


function App() {

  const [pokemonIndex, setpokemonIndex] = useState(0);

  const NextPokemon = () => {
    setpokemonIndex((pokemonIndex) => pokemonIndex + 1);
  }
  const previousPokemon = () => {
    setpokemonIndex((pokemonIndex) => pokemonIndex - 1)
  };
  return (
    <div >
      <PokemonCard pokemonList={pokemonList} pokemonIndex={pokemonIndex} />

      <p>{pokemonIndex}</p>
      <button onClick={previousPokemon}>précédent</button>

      <button onClick={NextPokemon}>suivant</button>

    </div>


  )
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: "./src/assets/151.png",
  },
];



export default App
