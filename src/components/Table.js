import * as React from "react";
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

export default function Table() {
    return (
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
    )
}