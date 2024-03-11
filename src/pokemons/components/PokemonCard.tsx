"use client";
import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleFavorite } from "@/lib/slices/pokemonsSlice";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
            width={150}
            height={150}
            priority={false}
            className="h-auto w-full"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <button
            onClick={handleFavorite}
            className="w-full flex gap-2 items-center justify-center px-4 py-2 hover:bg-gray-100 "
          >
            {isFavorite ? (
              <IoHeart className="text-red-600" size={20} />
            ) : (
              <IoHeartOutline className="text-red-600" size={20} />
            )}
            <p className="text-sm font-medium text-gray-800 leading-none">
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
