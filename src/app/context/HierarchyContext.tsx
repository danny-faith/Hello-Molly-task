"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { Cursor } from "../../../utils/utils";

type hierarchyContextType = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  highlighted: string[];
  setHighlighted: Dispatch<SetStateAction<string[]>>;
  expandAll: boolean;
  setExpandAll: Dispatch<SetStateAction<boolean>>;
  currentNode: string;
  setCurrentNode: Dispatch<SetStateAction<string>>;
  cursor: Cursor;
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
  cursor: new Cursor([]),
};

const HierarchyContext = createContext<hierarchyContextType>(
  hieracrchyContextDefaultValues
);

export function useHierarchyContext() {
  return useContext(HierarchyContext);
}

export function HierarchyProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: IHierarchyData;
}) {
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
  const cursor = useMemo(() => new Cursor(data), [data]);

  const value = {
    selected,
    setSelected,
    highlighted,
    setHighlighted,
    expandAll,
    setExpandAll,
    currentNode,
    setCurrentNode,
    cursor,
  };

  return (
    <HierarchyContext.Provider value={value}>
      {children}
    </HierarchyContext.Provider>
  );
}
