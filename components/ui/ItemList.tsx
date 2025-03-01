import ItemContext from "@/app/context/ItemContext";
import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const ItemList: React.FC<{ onEdit: (id: number, name: string) => void }> = ({ onEdit }) => {
  const { state, dispatch } = useContext(ItemContext);

  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
          <Button title="Edit" onPress={() => onEdit(item.id, item.name)} />
          <Button title="Delete" onPress={() => dispatch({ type: "DELETE_ITEM", payload: item.id })} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderBottomWidth: 1 },
  text: { fontSize: 16 },
});

export default ItemList;
