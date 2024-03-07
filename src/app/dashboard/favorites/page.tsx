import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favorite Pokemons",
  description: "This is the page for the first generation pokemons.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-600">Global State</span> Favorite Pokemons
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={[]} />
      </div>
    </div>
  );
}
