import { router } from "expo-router";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Screens(){
    const paths = [
        {id: 1, name: "Go to useState screen", route: "/screens/useState"} as const,
        {id: 2, name: "Go to useEffect screen", route: "/screens/useEffect"} as const,
    ]
    return (
        <View style={style.container}>
            {paths.map((path, _) => (
                <TouchableOpacity
                  style={style.buttons}
                  key={path.id}
                  onPress={() => path?.route && router.push(path.route)}>
                  <Text style={style.buttonText}>{path.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        gap: 10,
        textAlign: "center",
        padding: 10,
        marginTop: 20
    },
    buttons: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        padding: 6
    }
    ,
    buttonText: {
        fontSize: 30,
        fontWeight: "600"
    }
});