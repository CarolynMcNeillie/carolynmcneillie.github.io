import React, { useState } from "react";

import { PokemonName, StatsList, Stat, StatTitle } from "../styles/pokedex";

const Pokedex = ({ allPokemon }) => {
  const spriteNames = [
    "front_default",
    "front_female",
    "front_shiny",
    "front_shiny_female",
  ];
  const [currentMon, setCurrentMon] = useState(allPokemon[0]);

  const StatCard = ({ pokemon }) => (
    <article key={pokemon.id}>
      <PokemonName>{pokemon.name}</PokemonName>
      {spriteNames.map((sprite) =>
        pokemon.sprites[`${sprite}`] ? (
          <img
            key={`${pokemon.name}-${sprite}`}
            src={pokemon.sprites[`${sprite}`]}
            alt={`${pokemon.name} ${sprite}`}
          />
        ) : null
      )}
      <StatsList>
        <Stat>
          <StatTitle>HP:</StatTitle> {pokemon.hp}
        </Stat>
        <Stat>
          <StatTitle>Types:</StatTitle> {pokemon.types.join(" and ")}
        </Stat>
        <Stat className="capitalize">
          <StatTitle>Moves:</StatTitle>{" "}
          {pokemon.moves && pokemon.moves.join(", ")}
        </Stat>
      </StatsList>
    </article>
  );

  return (
    <main>
      <section style={{ display: "flex", width: "100%", padding: "50px" }}>
        <aside
          style={{
            display: "block",
            minWidth: "300px",
            paddingRight: "20px",
            lineHeight: "1.4",
          }}
        >
          <div
            style={{
              position: "sticky",
              width: "280px",
              maxHeight: "calc(100vh - 140px)",
              overflow: "scroll",
              top: "0px",
            }}
          >
            <StatCard pokemon={currentMon} />
          </div>
        </aside>
        <section>
          {allPokemon.map((pokemon) => {
            return (
              <button
                key={`${pokemon.name}`}
                onClick={() => setCurrentMon(pokemon)}
              >
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </button>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Pokedex;
