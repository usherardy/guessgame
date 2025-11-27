import { StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "@/components/PrimaryButton";

function StartGameScreen() {
   return (
      <View style={styles.inputContainer}>
         <TextInput style={styles.numberInput} 
         maxLength={2} 
         keyboardType="number-pad" />

         <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
               <PrimaryButton >Reset</PrimaryButton>
            </View>
            <View style={{flex: 1}}>
                <PrimaryButton>Confirm</PrimaryButton>
         </View>
      </View>
      </View>
   );
}

export default StartGameScreen;

const styles = StyleSheet.create({
   inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',  
      padding: 16,
      marginTop: 100,
      marginHorizontal: 24,
      borderRadius: 15,
      backgroundColor: '#72063c',
      elevation: 4,
      // iOS shadow properties
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
   },
   numberInput: {
      height: 60,
      width: 50,
      fontSize: 32,
      borderBottomColor: '#ddb52f',
      borderBottomWidth: 2,
      color: '#ddb52f',
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',
   },
});



