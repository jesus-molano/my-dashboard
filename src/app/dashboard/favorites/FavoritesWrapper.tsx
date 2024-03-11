"use client";
import { useAppSelector } from "@/lib/hooks";
import { PokemonGrid } from "@/pokemons";
import React from "react";
import { NotFavorites } from "./NotFavorites";

export const FavoritesWrapper = () => {
  const favPokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return (
    <>
      {favPokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <PokemonGrid pokemons={favPokemons} />
      )}
    </>
  );
};
