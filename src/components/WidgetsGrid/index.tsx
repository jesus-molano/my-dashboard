"use client";
import React from "react";
import { SimpleWidget } from "@/components";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/lib/hooks";
import type { SimpleWidgetItem } from "../SimpleWidget";

const WIDGETS: SimpleWidgetItem[] = [
  {
    title: "Counter",
    subtitle: "Products counter",
    label: "Counter",
    href: "/dashboard/counter",
    icon: <IoCartOutline size={70} className="text-blue-600" />,
  },
];

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);
  WIDGETS[0].title = `${isCart}`;

  return (
    <div className="flex flex-wrap p-2 items-center justify-center gap-2">
      {WIDGETS.map((widget, index) => (
        <SimpleWidget key={index} {...widget} />
      ))}
    </div>
  );
};
