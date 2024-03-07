import React from "react";
import { SimplePokemon } from "..";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="flex flex-col items-center">
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        </div>
      ))}
    </>
  );
};
