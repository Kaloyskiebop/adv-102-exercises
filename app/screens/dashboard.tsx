import { View, Text, StyleSheet, Button } from "react-native";
import { auth } from "@/config/firebase";
import { router } from "expo-router";

export default function DashboardScreen(){
    const currentUser = auth.currentUser;

    return (
      <View style={style.container}>
        {currentUser && (
            <>
            <Text style={style.textTitle}>Welcome to Dashboard Screen</Text>
            <Text>User's Email: {currentUser?.email}</Text>
            <Button title="Logout" onPress={() => {
                auth.signOut()
                router.push("/screens/Exercise_8/login")
            }}/>
            </>
        )}
      </View>  
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        gap: 6
    },
    textTitle: {
        fontSize: 15,
        fontWeight: '600'
    }
})