import React, {useState} from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Pokedex from '../components/Pokedex'
import BattleZone from '../components/BattleZone'
import WhosThatPokemon from '../components/WhosThatPokemon'

import {GlobalStyles, Heading, Nav, NavLink, NavButton} from '../styles/index'

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

  const [view, setView] = useState('pokedex')

  const Body = () => (
    <main>
      {view === 'pokedex' && (
        <Pokedex allPokemon={allPokemon} />
      )}
      {view === 'battle' && (
        <BattleZone allPokemon={allPokemon} />
      )}
      {view === 'guess' && (
        <WhosThatPokemon allPokemon={allPokemon}/>
      )}
    </main>
  )

  return (
    <>
      <GlobalStyles/>
      <Nav>
        <Heading>Ketchum</Heading>
        <ul>
          <NavLink><NavButton onClick={() => setView('pokedex')}>Pokedex</NavButton></NavLink>
          <NavLink><NavButton onClick={() => setView('guess')}>Who's That Pokemon</NavButton></NavLink>
          <NavLink><NavButton onClick={() => setView('battle')}>Battle Zone</NavButton></NavLink>
        </ul>
        
      </Nav>
      <main>
        <Body />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Pokemon</title>;