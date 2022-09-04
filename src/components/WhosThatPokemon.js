import React, { useState } from "react";
import { Container, Pokemon, AnswerBox } from "../styles/whosThatPokemon";

const WhosThatPokemon = ({ allPokemon }) => {
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [pokemon, setPokemon] = useState(getPokemon());
  const [formValid, setFormValid] = useState(true);
  let pokemonName = pokemon.name.replace(/-/g, " ");
  const [hintArray, setHintArray] = useState(
    shuffleArray([pokemonName, getPokemonName(), getPokemonName()])
  );

  console.log(hintArray);

  function getPokemon() {
    const randPokemon =
      allPokemon[Math.floor(Math.random() * allPokemon.length)];

    if (!randPokemon?.sprites?.front_default) {
      console.log("the image is missing", randPokemon);
      return getPokemon();
    } else {
      return randPokemon;
    }
  }

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function getPokemonName() {
    const randPokemon = getPokemon();
    return randPokemon.name;
  }

  function getHint() {
    setShowHint(true);
  }

  function resetStage() {
    const newPokemon = getPokemon();
    setPokemon(newPokemon);
    pokemonName = newPokemon.name;
    setFormValid(true);
    setWrongGuessCount(0);
    setShowHint(false);
    setWrongGuesses([]);
    setHintArray(
      shuffleArray([newPokemon.name, getPokemonName(), getPokemonName()])
    );
  }

  function handleWin() {
    console.log(`You got it! The pokemon is ${pokemonName}`);
    setScore(score + 1);
    resetStage();
  }

  function checkStringMatches(string) {
    const length = string.length;
    return string.toLowerCase() === pokemonName.substring(0, length);
  }

  function checkAnswer(answer) {
    if (checkStringMatches(answer)) {
      handleWin();
    } else {
      setWrongGuesses([...wrongGuesses, answer]);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    const answer = e.target.value;
    const matches = checkStringMatches(answer);
    setFormValid(answer.length === 0 || matches);

    if (!matches) {
      setWrongGuessCount(wrongGuessCount + 1);
    }

    if (matches && answer.length === pokemonName.length) {
      handleWin();
      e.target.value = "";
    }
  }

  return (
    <Container>
      <Pokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
      <AnswerBox
        type="text"
        onChange={(e) => handleChange(e)}
        valid={formValid}
        placeholder="Who's that pokemon?"
        autoFocus
      />
      <p>Score: {score}</p>
      {wrongGuessCount > 2 && !showHint && (
        <button onClick={getHint}>Click for hint</button>
      )}
      {showHint &&
        hintArray.map((hint) => (
          <button key={hint} onClick={() => checkAnswer(hint)}>
            {hint}
          </button>
        ))}
    </Container>
  );
};

export default WhosThatPokemon;
