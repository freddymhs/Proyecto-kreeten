import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView} from 'react-native';
import {Provider as PaperProvider } from 'react-native-paper';
import firebase from './src/libs/Firebase.js';
import {login,register,logout} from './src/index'
import theme from './src/theme'


export default function App() {


const [user, setUser] = useState(undefined);
useEffect(() => {
firebase.auth().onAuthStateChanged((res) => { 
setUser(res); // asigna el usuario si auth cambio
}); 
}, [])



// if(user === undefined) return null;

// en return cargaron el auth Y DEPENDIENDO SI EO ES TRUE O FALSE  , L OENVIARA A APP O AU NO.
  return (
     <PaperProvider theme={theme}>

     <SafeAreaView>
  
    {/* {user ? 
    <Text>
    welcome usuario
    </Text> 
    : 
    <Text>
    aun no estas logeado
    </Text>
    } */}
    <Text
    onPress={()=>{register()}}
    >registrarme </Text>
 <Text
    onPress={()=>{login()}}
    > ingresar</Text>
 <Text
    onPress={()=>{logout()}}
    > salir</Text>

    


 {/* {
 user ?    <View style={styles.container}>
      <StatusBar style="auto" />
      
          <Text>welcome</Text>
          <TextInput
        placeholder="escribir.."
    />

    <Text  
     style={{ color: theme.colors.primary}}
    onPress={()=>{ChangeLoggedState()}}>logearme
    </Text>

    <Text  
      style={{ color: theme.colors.primary}}
    onPress={()=>{ChangeLoggedState()}}>registrarme
    </Text>

    </View>
    :
    <View>
    <Text>no logeado</Text>
    </View>
    } */}
</SafeAreaView>
 
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
