import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { TextInput } from "react-native-paper";

export default function Register(){
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };


    return (
        <View style={style.container}>
            <Text style={style.title}>Register</Text>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <View style={style.imageContainer}>
            {image && <Image source={{ uri: image }} style={style.image} />}
            </View>
                
            <TextInput
             value={name}
             onChangeText={(e) => setName(e)}
             mode="outlined"
             label="Name"
             placeholder="Enter your name here"
            />
             <TextInput
             value={email}
             onChangeText={(e) => setEmail(e)}
             mode="outlined"
             label="Email"
             placeholder="Enter your email here"
            />
             <TextInput
             value={password}             
             onChangeText={(e) => setPassword(e)}
             mode="outlined"
             label="Password"
             placeholder="Enter your password here"
            />
             <TouchableOpacity style={style.button}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        padding: 10 
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
    imageContainer: {
        alignItems: "center",
        padding: 10,
    },
    image: {
        width: 200,
        borderRadius: 4,
        height: 200,
    },
});