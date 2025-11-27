import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({children}) {
    
    function pressHandler() {
        console.log('Pressed!');
    }
    return (
    <View style={styles.buttonOuterContainer}>
    <Pressable 
    style={styles.buttonInnerContainer}
    onPress={pressHandler} 
    android_ripple={{color: '#e65050ff'}}
    >
    <Text style={styles.buttonText}>{children} </Text>
    </Pressable>
    </View>
    );

}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        
        borderRadius: 28,
        margin:4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#931856ff',
        paddingVertical: 8,
        paddingHorizontal:16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },

});


