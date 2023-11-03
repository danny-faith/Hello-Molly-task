"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type hierarchyContextType = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const hieracrchyContextDefaultValues: hierarchyContextType = {
  selected: "",
  setSelected: () => {},
};

const HierarchyContext = createContext<hierarchyContextType>(
  hieracrchyContextDefaultValues
);

export function useHivizContext() {
  return useContext(HierarchyContext);
}

export function HierarchyProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState(
    hieracrchyContextDefaultValues.selected
  );
  const value = {
    selected,
    setSelected,
  };

  return (
    <HierarchyContext.Provider value={value}>
      {children}
    </HierarchyContext.Provider>
  );
}
