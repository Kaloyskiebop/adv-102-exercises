import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function FormContainer(){
    return (
        <View style={style.container}>
           {[
            {id: 1, title: "Login" ,routeName: "/screens/Exercise_8/login" as any},
            {id: 2, title: "Register" ,routeName: "/screens/Exercise_8/register" as any},
           ].map((r, index) => (
            <View key={index} style={style.buttonContainer}>
                <Button title={`Go to ${r.title}`} onPress={() => r.routeName && router.push(r.routeName)} />
            </View>
           ))
           } 
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
    buttonContainer: {
        flexDirection: "column",
    }
})