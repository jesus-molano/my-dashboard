import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const localStorageMiddleware: Middleware =
  ({ getState }: MiddlewareAPI) =>
  (next) =>
  (action) => {
    const result = next(action);
    const { type } = action as Action;
    if (type === "pokemons/toggleFavorite") {
      const { pokemons } = getState() as RootState;
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(pokemons.favorites)
      );
    }
    return result;
  };
