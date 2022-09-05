import React, {useRef} from "react";

const BattleZone = ({ allPokemon }) => {
  function getPokemon(name) {
    return allPokemon.find((pokemon) => pokemon.name === name);
  }

  function getRandomMove(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  function battle(e) {
    e.preventDefault();
    const player1 = useRef;
    const player2 = useRef;
    const pokemon1 = getPokemon(player1.value);
    const player1Move = getRandomMove(pokemon1.moves);
    const pokemon2 = getPokemon(player2.value);
    const player2Move = getRandomMove(pokemon2.moves);
    console.log(pokemon1);
    alert(`TIME TO BATTLE, ${player1.value} and ${player2.value}!!!`);
    alert(`First up, ${player1.value} uses ${player1Move}`);
    alert(`Next up, ${player2.value} uses ${player2Move}`);
  }

  const Player = ({playerId}) => (
    <select>
    {allPokemon.map((pokemon) => (
      <option key={`${pokemon.id}-${playerId}`} value={`${pokemon.name}`}>
        {pokemon.name}
      </option>
    ))}
    </select>
  )

  return (
    <main>
      <h1>Ketchum</h1>
      <div>
        <h2>Battle Zone!</h2>
        <form>
          <Player playerId="1" ref={player1}/>
          VS{" "}
          <Player playerId="2" ref={player2}/>
          <button onClick={battle}>BATTLE!</button>
        </form>
      </div>
    </main>
  );
};

export default BattleZone;
