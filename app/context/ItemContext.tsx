import React, { createContext, useReducer, ReactNode } from "react";

// Define the Item Type
type Item = {
  id: number;
  name: string;
};

// Define Actions
type Action =
  | { type: "ADD_ITEM"; payload: string }
  | { type: "UPDATE_ITEM"; payload: { id: number; name: string } }
  | { type: "DELETE_ITEM"; payload: number };

// Initial State
const initialState: Item[] = [];

// Reducer Function
const itemReducer = (state: Item[], action: Action): Item[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Date.now(), name: action.payload }];
    case "UPDATE_ITEM":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, name: action.payload.name } : item
      );
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

// Create Context
const ItemContext = createContext<{
  state: Item[];
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider Component
export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
