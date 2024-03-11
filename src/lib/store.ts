import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import pokemonsReducer from "./slices/pokemonsSlice";
import { localStorageMiddleware } from "./middlewares/localStorage-middleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: pokemonsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
