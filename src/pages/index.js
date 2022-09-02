import React, {useState} from "react";
import { useStaticQuery, graphql } from 'gatsby';

function battle(e) {
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");
  e.preventDefault();
  alert(`TIME TO BATTLE, ${player1.value} and ${player2.value}!!!`);
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPokemon {
        nodes {
          id
          name
          sprites {
            front_default
            front_female
            front_shiny
            front_shiny_female
          }
          types {
            type {
              name
            }
          }
          moves {
            move {
              name
            }
          }
          stats {
            base_stat
            stat {
              name
            }
          }
        }
      }
    }
  `);


  const allPokemon = data.allPokemon.nodes.map(node => {
    const { id, name, sprites, types, moves, stats } = node;
    return {
      name,
      id,
      sprites: sprites,
      types: types.map(type => type.type.name),
      moves: moves.map(move => move.move.name),
      hp: stats.filter(stat => stat.stat.name === 'hp')[0].base_stat
    }
  });

  const spriteNames = ['front_default', 'front_female', 'front_shiny', 'front_shiny_female']

  const [currentMon, setCurrentMon] = useState(allPokemon[0])

  const StatCard = ({pokemon}) => (
    <article key={pokemon.id}>
      {spriteNames.map(sprite => (pokemon.sprites[`${sprite}`] ? <img key={`${pokemon.name}-${sprite}`} src={pokemon.sprites[`${sprite}`]} alt={`${pokemon.name} ${sprite}`}/> : null))}
      <h3>{ pokemon.name }, HP: {pokemon.hp}</h3>
      <p><strong>Types </strong>{ pokemon.types.join(', ') }</p>
      <p><strong>Moves </strong>{ pokemon.moves && pokemon.moves.join(', ') }</p>
    </article>
  )

  return (
    <main>
      <section style={{display: 'flex', width: '100%', padding: '50px'}}>
        <aside style={{display: 'block', minWidth: '300px', paddingRight: '40px', lineHeight: '1.4'}}>
          <div style={{position: 'fixed', width: '280px', maxHeight: 'calc(100vh - 140px)', overflow: 'scroll'}}>
            <StatCard pokemon={currentMon} />
          </div>
        </aside>
        <main>
        <h1>Ketchum</h1>
          <div>
            <h2>Battle Zone!</h2>
            <form>
              <select id="player1">
                {allPokemon.map((pokemon) => (
                  <option key={`${pokemon.id}-1`} value={`${pokemon.name}`}>
                    {pokemon.name}
                  </option>
                ))}
              </select>{" "}
              VS{" "}
              <select id="player2">
                {allPokemon.map((pokemon) => (
                  <option key={`${pokemon.id}-2`} value={`${pokemon.name}`}>
                    {pokemon.name}
                  </option>
                ))}
              </select>
              <button onClick={battle}>BATTLE!</button>
            </form>
          </div>
          <hr />
          
          {allPokemon.map((pokemon) => {
            return (
              <button onClick={() => setCurrentMon(pokemon)}>
                <img key={`${pokemon.name}`} src={pokemon.sprites.front_default} alt={pokemon.name}/>
              </button>
            )
          })}
        </main>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Pokemon</title>;