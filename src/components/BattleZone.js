import React, {useState} from "react";

const BattleZone = ({ allPokemon }) => {
  const [pokemon1, setPokemon1] = useState(allPokemon[0]);
  const [pokemon2, setPokemon2] = useState(allPokemon[0]);

  function getPokemon(name) {
    return allPokemon.find((pokemon) => pokemon.name === name);
  }

  function getRandomMove(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  function battle(e) {
    e.preventDefault();
    const player1Move = getRandomMove(pokemon1.moves);
    const player2Move = getRandomMove(pokemon2.moves);
    alert(`TIME TO BATTLE, ${pokemon1.name} and ${pokemon2.name}!!!`);
    alert(`First up, ${pokemon1.name} uses ${player1Move}`);
    alert(`Next up, ${pokemon2.name} uses ${player2Move}`);
  }

  const Player = ({playerId, onChange}) => (
    <select onChange={onChange}>
      {allPokemon.map((pokemon) => (
        <option key={`${pokemon.id}-${playerId}`} value={`${pokemon.name}`}>
          {pokemon.name}
        </option>
      ))}
      </select>
  );

  return (
    <main>
      <h1>Ketchum</h1>
      <div>
        <h2>Battle Zone!</h2>
        <form>
          <Player playerId="1" onChange={(e) => setPokemon1(getPokemon(e.target.value))} />
          VS{" "}
          <Player playerId="2" onChange={(e) => setPokemon2(getPokemon(e.target.value))}/>
          <button onClick={battle}>BATTLE!</button>
        </form>
      </div>
    </main>
  );
};

export default BattleZone;
