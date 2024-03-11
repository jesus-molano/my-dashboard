import type { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

// const getInitialState = (): PokemonsState => {};

const initialState: PokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = action.payload;
    },

    setFavorites(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
