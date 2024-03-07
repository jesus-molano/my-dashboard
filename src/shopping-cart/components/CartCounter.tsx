"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  decrement,
  increment,
  initCounterState,
  reset,
} from "@/lib/slices/counterSlice";
import React, { useEffect, useRef } from "react";

interface CartCounterProps {
  initialValue?: number;
}

export const CartCounter = ({ initialValue = 0 }: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const initialized = useRef(false);
  if (!initialized.current) {
    dispatch(initCounterState(initialValue));
    initialized.current = true;
  }

  const handleAdd = () => dispatch(increment());
  const handleSubtract = () => {
    dispatch(decrement());
  };
  const handleReset = () => dispatch(reset(initialValue));

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
          className="flex items-center justify-center py-2 px-4 rounded-xl bg-gray-600 text-white hover:bg-gray-500 transition-all min-w-[60px]"
          onClick={handleReset}
        >
          Reset
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
