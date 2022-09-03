import React, {useState} from "react";

const WhosThatPokemon = ({allPokemon}) => {
  function getPokemon() {
    return allPokemon[Math.floor(Math.random()*allPokemon.length)]
  }

  const [pokemon, setPokemon] = useState(getPokemon())

  return (
    <main>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
    </main>
  );
};

export default WhosThatPokemon;