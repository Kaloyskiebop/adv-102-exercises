import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export default function Login(){
    const inputFields = [
        {label: "Email", placeholder: "Enter your email here.."},
        {label: "Password", placeholder: "Enter your password here..", secureMode: true}
    ]

    return (
       <View style={style.container}>
        <Text style={style.title}>Welcome to Login!</Text>
            {inputFields.map((input, i) => (
                <TextInput
                key={i}
                label={input.label}
                mode="outlined"
                placeholder={input.placeholder}
                secureTextEntry={input.secureMode}
                />
            ))}
            <TouchableOpacity style={style.button}>
                <Text>Login</Text>
            </TouchableOpacity>
       </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 35,
        textAlign: "center",
        margin: 20
    },
    button: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        borderRadius: "5%",
        marginTop: 10,
        alignItems: "center"
    },
})