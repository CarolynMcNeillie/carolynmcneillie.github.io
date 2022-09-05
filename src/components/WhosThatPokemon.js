import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  ScoreBord,
  Pokemon,
  AnswerBox,
  Button,
} from "../styles/whosThatPokemon";
import { shuffleArray, cleanString } from "./utils";

const WhosThatPokemon = ({ allPokemon }) => {
  const [pokemon, setPokemon] = useState(getPokemon());
  let pokemonName = cleanString(pokemon.name);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [formValid, setFormValid] = useState(true);
  const [hintArray, setHintArray] = useState(
    shuffleArray([pokemonName, getPokemonName(), getPokemonName()])
  );
  const input = useRef();
  const dialog = useRef();

  useEffect(() => {
    let storedScore = 0;
    if (typeof window !== `undefined`) {
      storedScore = parseInt(localStorage.getItem("pokeScore")) || 0;
    }

    setScore(storedScore);
  }, []);

  function resetStage() {
    input.current.value = '';
    const newPokemon = getPokemon();
    setPokemon(newPokemon);
    pokemonName = cleanString(newPokemon.name);
    setFormValid(true);
    setWrongGuessCount(0);
    setShowHint(false);
    setHintArray(
      shuffleArray([pokemonName, getPokemonName(), getPokemonName()])
    );
    setWrongGuesses([]);
  }

  function getPokemon() {
    const randPokemon =
      allPokemon[Math.floor(Math.random() * allPokemon.length)];

    if (!randPokemon?.sprites?.front_default) {
      return getPokemon();
    } else {
      return randPokemon;
    }
  }

  function getPokemonName() {
    const randPokemon = getPokemon();
    return cleanString(randPokemon.name);
  }

  function handleWin() {
    dialog.current.showModal();
    const newScore = score + 1;
    if (typeof window !== `undefined`) {
      localStorage.setItem("pokeScore", newScore);
    }
    setScore(newScore);
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
      const count = wrongGuessCount + 1;
      setWrongGuessCount(count);
    }

    if (matches && answer.length === pokemonName.length) {
      handleWin();
      e.target.value = "";
    }
  }

  return (
    <Container>
      <dialog ref={dialog}>
        <h2>You got it!</h2>
        <img src={pokemon.sprites.front_default} alt={pokemonName} />
        <p>
          {`The pokemon is ${pokemonName}, a ${pokemon.types.join(
            " and "
          )} type!`}
        </p>
        <form method="dialog">
          <Button onClick={() => resetStage()}>OK</Button>
        </form>
      </dialog>
      <ScoreBord>Score: {score}</ScoreBord>
      <Pokemon src={pokemon.sprites.front_default} alt={pokemonName} />
      <AnswerBox
        ref={input}
        type="text"
        onChange={(e) => handleChange(e)}
        valid={formValid}
        placeholder="Who's that pokemon?"
      />
      {wrongGuessCount > 2 && !showHint && (
        <Button onClick={() => setShowHint(true)}>Gimme a hint</Button>
      )}
      {showHint &&
        hintArray.map((hint) => (
          <Button
            key={hint}
            onClick={() => checkAnswer(hint)}
            disabled={wrongGuesses.includes(hint)}
          >
            {hint}
          </Button>
        ))}
    </Container>
  );
};

export default WhosThatPokemon;
