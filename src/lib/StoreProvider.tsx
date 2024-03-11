"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { setFavorites } from "./slices/pokemonsSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    storeRef.current?.dispatch(
      setFavorites(
        JSON.parse(localStorage.getItem("favorite-pokemons") || "{}")
      )
    );
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
