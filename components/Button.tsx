import {
    Text,
    StyleSheet,
    Pressable
} from "react-native";
// import { MyTheme } from "../../colourScheme";

const Button = (props: any) => {
    const style = props.style
    const text = props.text;
    const onPress = props.onPress;
    return (
        <Pressable
            style={[styles.button, style]}
            onPress={()=>{onPress()}}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: "red",
        // backgroundColor: MyTheme.colors.primary,
        width: "90%",

    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
});