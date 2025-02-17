import { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import timeFormat from "../utils/TimeFormat";
import buttons from "../utils/Buttons";


export default function useStateScreen(){
    const [displayTime, setDisplayTime] = useState(0);
    const [isCurrentlyRunning, SetisCurrentlyRunning] = useState(false);
    let interval = useRef<number | null>(null);

    const handleStart = () => {
        if(!isCurrentlyRunning){
            SetisCurrentlyRunning(true);
            interval.current = setInterval(() => {
                setDisplayTime(prev => prev+1);
            }, 1000) as unknown as number;
        }
    }

    const handleStop = () => {
        if(isCurrentlyRunning && interval.current !== null){
            SetisCurrentlyRunning(false);
            clearInterval(interval.current);
            interval.current = null;
        }
    }

    const handleReset = () => {
        if(interval.current !== null){
            clearInterval(interval.current);
            interval.current = null;
        }
        SetisCurrentlyRunning(false);
        setDisplayTime(0);
    }

    return (
        <View style={style.container}>
            <Text style={style.timeText}>{timeFormat(displayTime)}</Text>
            {buttons.map((b, _) => (
                <TouchableOpacity
                    style={style.buttons}
                    key={b.id}
                    onPress={() => {
                    if(b.name === "Start"){
                        isCurrentlyRunning
                        ? handleStop()
                        : handleStart()
                    }
                    else{
                        handleReset();
                    }
                }
            }
                >
                    <Text style={style.buttonText}>
                        {isCurrentlyRunning && b.name === "Start" ? "Stop" : b.name}
                    </Text>
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
        fontWeight: 600
    },
    timeText: {
        fontSize: 30,
        fontWeight: 800
    }
});