import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;

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
          <Link
            href="/dashboad/main"
            className="flex gap-2 items-center justify-center px-4 py-2 hover:bg-gray-100 "
          >
            <IoHeartOutline className="text-red-600" size={20} />
            <p className="text-sm font-medium text-gray-800 leading-none">
              Add to favorites
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
