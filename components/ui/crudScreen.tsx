import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ItemList from "./ItemList";
import ItemContext from "@/app/context/ItemContext";

const HomeScreen: React.FC = () => {
  const { dispatch } = useContext(ItemContext);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch({ type: "UPDATE_ITEM", payload: { id: editId, name: input } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD_ITEM", payload: input });
    }
    setInput("");
  };

  const handleEdit = (id: number, name: string) => {
    setEditId(id);
    setInput(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Crud</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={input}
        onChangeText={setInput}
      />
      <Button title={editId ? "Update Item" : "Add Item"} onPress={handleAddOrUpdate} />

      <ItemList onEdit={handleEdit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
});

export default HomeScreen;
