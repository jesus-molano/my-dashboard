import type { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}
const initialState: PokemonsState = {
  // "1": { id: "1", name: "bulbasaur" },
  // "4": { id: "4", name: "charmander" },
  // "7": { id: "7", name: "squirtle" },
  // "25": { id: "25", name: "pikachu" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload;
      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = action.payload;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
