import { Pokemon, PokemonsResponse } from "@/pokemons";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PokemonPageProps {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
  );
  const data: PokemonsResponse = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
  }));
  return pokemons.map(({ name }) => ({ name: name }));
}

export async function generateMetadata({
  params,
}: PokemonPageProps): Promise<Metadata> {
  const { name } = await getPokemon(params.name);
  return {
    title: `${name.toUpperCase()}'s page`,
    description: `This is the page for ${name}`,
  };
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (e) {
    notFound();
  }
};

const TYPES_COLORS = [
  { type: "normal", color: "bg-gray-400" },
  { type: "fighting", color: "bg-red-600" },
  { type: "flying", color: "bg-blue-400" },
  { type: "poison", color: "bg-purple-600" },
  { type: "ground", color: "bg-yellow-600" },
  { type: "rock", color: "bg-yellow-800" },
  { type: "bug", color: "bg-green-500" },
  { type: "ghost", color: "bg-indigo-600" },
  { type: "steel", color: "bg-gray-600" },
  { type: "fire", color: "bg-red-600" },
  { type: "water", color: "bg-blue-600" },
  { type: "grass", color: "bg-green-600" },
  { type: "electric", color: "bg-yellow-400" },
  { type: "psychic", color: "bg-pink-600" },
  { type: "ice", color: "bg-blue-300" },
  { type: "dragon", color: "bg-indigo-800" },
  { type: "dark", color: "bg-gray-800" },
  { type: "fairy", color: "bg-pink-400" },
  { type: "unknown", color: "bg-gray-400" },
  { type: "shadow", color: "bg-gray-800" },
];

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { name } = params;
  const pokemon = await getPokemon(name);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={
                pokemon.sprites.other?.["official-artwork"].front_default ?? ""
              }
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            {/* <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex gap-1">
              {pokemon.types.map((type) => (
                <p
                  key={type.slot}
                  className={`
                    font-bold text-sm px-2 py-1 rounded-md text-white 
                    ${
                      TYPES_COLORS.find((t) => t.type === type.type.name)?.color
                    }
                  `}
                >
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
