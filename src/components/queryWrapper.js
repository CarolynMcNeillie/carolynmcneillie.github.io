import React, {useState} from "react";
import { useStaticQuery, graphql } from 'gatsby';

const QueryWrapper = ({children}) => {
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

  return (
    {children}
  );
};

export default QueryWrapper;