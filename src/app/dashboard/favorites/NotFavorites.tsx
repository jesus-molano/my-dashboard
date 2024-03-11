import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-red-500" size={100} />
      <span>There are no favorites</span>
    </div>
  );
};
