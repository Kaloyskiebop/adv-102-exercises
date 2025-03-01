import React from "react";
import HomeScreen from "@/components/ui/crudScreen";
import { ItemProvider } from "../context/ItemContext";

export default function crudScreen() {
  return (
    <ItemProvider>
      <HomeScreen />
    </ItemProvider>
  );
}
