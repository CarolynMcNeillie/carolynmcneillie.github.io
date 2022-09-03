import React, {useState} from "react";

const Pokedex = ({allPokemon}) => {
  const spriteNames = ['front_default', 'front_female', 'front_shiny', 'front_shiny_female']
  const [currentMon, setCurrentMon] = useState(allPokemon[0])

  const StatCard = ({pokemon}) => (
    <article key={pokemon.id}>
      <h2>{pokemon.name}</h2>
      {spriteNames.map(sprite => (pokemon.sprites[`${sprite}`] ? <img key={`${pokemon.name}-${sprite}`} src={pokemon.sprites[`${sprite}`]} alt={`${pokemon.name} ${sprite}`}/> : null))}
      <dl>
        <dt>HP</dt><dd>{pokemon.hp}</dd>
        <dt>Types</dt><dd>{pokemon.types.join(', ')}</dd>
        <dt>Moves</dt><dd>{pokemon.moves && pokemon.moves.join(', ')}</dd>
      </dl>
    </article>
  )


  return (
    <main>
      <section style={{display: 'flex', width: '100%', padding: '50px'}}>
        <aside style={{display: 'block', minWidth: '300px', paddingRight: '20px', lineHeight: '1.4'}}>
          <div style={{position: 'sticky', width: '280px', maxHeight: 'calc(100vh - 140px)', overflow: 'scroll', top: "20px"}}>
            <h2>Pokedex</h2>
            <StatCard pokemon={currentMon} />
          </div>
        </aside>
        <section>
          {allPokemon.map((pokemon) => {
            return (
              <button key={`${pokemon.name}`} onClick={() => setCurrentMon(pokemon)}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
              </button>
            )
          })}
        </section>
      </section>
    </main>
  );
};

export default Pokedex;