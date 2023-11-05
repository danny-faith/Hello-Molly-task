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
  expandAll: boolean;
  setExpandAll: Dispatch<SetStateAction<boolean>>;
  currentNode: string;
  setCurrentNode: Dispatch<SetStateAction<string>>;
};

const hieracrchyContextDefaultValues: hierarchyContextType = {
  selected: "",
  setSelected: () => {},
  highlighted: [],
  setHighlighted: () => {},
  expandAll: false,
  setExpandAll: () => {},
  currentNode: "5555",
  setCurrentNode: () => {},
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
  const [expandAll, setExpandAll] = useState(
    hieracrchyContextDefaultValues.expandAll
  );
  const [currentNode, setCurrentNode] = useState(
    hieracrchyContextDefaultValues.currentNode
  );

  const value = {
    selected,
    setSelected,
    highlighted,
    setHighlighted,
    expandAll,
    setExpandAll,
    currentNode,
    setCurrentNode,
  };

  return (
    <HierarchyContext.Provider value={value}>
      {children}
    </HierarchyContext.Provider>
  );
}
