import * as React from "react";
import pokemon from "../data/pokemon";

const tableStyles = {
  border: "3px solid red",
};

const TdStyles = {
  border: "1px solid yellow",
  padding: "5px 20px",
};

const Td = ({ children }) => <td style={TdStyles}>{children}</td>;

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

const TableRow = ({ pokemon, index }) => (
  <tr key={pokemon.name}>
    <Td>{pokemon.name}</Td>
    <Td>{pokemon.region}</Td>
    <Td>{pokemon.level}</Td>
    <Td>{pokemon.type}</Td>
    <Td>
      <List list={pokemon.possibleMoves} />
    </Td>
    <Td>
      <List list={pokemon.moves} />
    </Td>
  </tr>
);

function battle(e) {
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");
  e.preventDefault();
  alert(`TIME TO BATTLE, ${player1.value} and ${player2.value}!!!`);
}

const IndexPage = () => {
  return (
    <main>
      <h1>Pokemon</h1>
      <div>
        <h2>Battle Zone!</h2>
        <form>
          <select id="player1">
            {pokemon.map((pokemon) => (
              <option key={pokemon} value={`${pokemon.name}`}>
                {pokemon.name}
              </option>
            ))}
          </select>{" "}
          VS{" "}
          <select id="player2">
            {pokemon.map((pokemon) => (
              <option key={pokemon} value={`${pokemon.name}`}>
                {pokemon.name}
              </option>
            ))}
          </select>
          <button onClick={battle}>BATTLE!</button>
        </form>
      </div>
      <hr />
      <table style={tableStyles}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Region</th>
            <th>Level</th>
            <th>Type</th>
            <th>Possible Moves</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemon, index) => (
            <TableRow pokemon={pokemon} index={index} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Pokemon</title>;