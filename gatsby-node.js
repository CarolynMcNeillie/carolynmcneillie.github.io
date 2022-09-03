const fetch = require('node-fetch');

const POKEMON_TYPE = 'Pokemon';
const MOVE_NODE = 'Moves';

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
  const { createNode } = actions;

  const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon?' + new URLSearchParams({
    limit: '2000',
}));
  const pokemonJson = await pokemonResponse.json();
  const pokemonResults = pokemonJson.results || []

  const pokemon = await Promise.all(pokemonResults.map(async result => {
    const { url } = result;
    const pokeResponse = await fetch(url);
    return await pokeResponse.json();
  }));

  const response2 = await fetch('https://pokeapi.co/api/v2/move?' + new URLSearchParams({
    limit: '1000',
    }));
  const json2 = await response2.json();
  const results2 = json2.results || []

  const moves = await Promise.all(results2.map(async result => {
    const { url } = result;
    const pokeResponse = await fetch(url);
    return await pokeResponse.json();
  }));

  pokemon.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${POKEMON_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: POKEMON_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    });
  });

  moves.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${MOVE_NODE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: MOVE_NODE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    });
  });
};