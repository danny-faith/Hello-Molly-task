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
  highlighted: string[];
  setHighlighted: Dispatch<SetStateAction<string[]>>;
};

const hieracrchyContextDefaultValues: hierarchyContextType = {
  selected: "",
  setSelected: () => {},
  highlighted: [],
  setHighlighted: () => {},
};

const HierarchyContext = createContext<hierarchyContextType>(
  hieracrchyContextDefaultValues
);

export function useHierarchyContext() {
  return useContext(HierarchyContext);
}

export function HierarchyProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState(
    hieracrchyContextDefaultValues.selected
  );
  const [highlighted, setHighlighted] = useState(
    hieracrchyContextDefaultValues.highlighted
  );
  const value = {
    selected,
    setSelected,
    highlighted,
    setHighlighted,
  };

  return (
    <HierarchyContext.Provider value={value}>
      {children}
    </HierarchyContext.Provider>
  );
}
