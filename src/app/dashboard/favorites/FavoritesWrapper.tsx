"use client";
import { useAppSelector } from "@/lib/hooks";
import { PokemonGrid } from "@/pokemons";
import React, { useState } from "react";
import { NotFavorites } from "./NotFavorites";

export const FavoritesWrapper = () => {
  const favPokemons = useAppSelector((state) => Object.values(state.pokemons));
  const [pokemons, setPokemons] = useState(favPokemons);
  return (
    <>
      {pokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};
