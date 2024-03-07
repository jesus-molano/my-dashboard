"use client";
import React, { useState } from "react";

interface CartCounterProps {
  initialValue?: number;
}

export const CartCounter = ({ initialValue = 0 }: CartCounterProps) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => setCount((prev) => prev + 1);
  const handleSubtract = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all min-w-[60px]"
          onClick={handleSubtract}
        >
          -
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all min-w-[60px]"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    </>
  );
};
