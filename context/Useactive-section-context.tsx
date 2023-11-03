"use client";

import { links } from "@/app/lib/datas";
import React, { useState, createContext, useContext } from "react";

type newLink = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

type ActiveSectionContextType = {
  activeSection: newLink;
  setActiveSection: React.Dispatch<React.SetStateAction<newLink>>;
};

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<newLink>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionNull() {
  const ctx = useContext(ActiveSectionContext);

  if (ctx === null) {
    throw new Error("Error");
  }
  return ctx;
}
