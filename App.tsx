import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ImageBackground, TextInput } from 'react-native';

export default function App() {

  const [ciudad, setciudad] = useState("")


  function saludo( city : string ) {
    Alert.alert("El clima de "+ city +" es: 19°")
    console.log("El clima de "+ city +" es: 19°");
  }

  return (
      <ImageBackground 
      source={{uri:'https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg'}}
      style= {styles.container }
      >
        <Text  style={styles.titulo}>CLIMA</Text>
        <TextInput
          placeholder='Ingrese una ciudad'
          placeholderTextColor={'white'}
          style ={ styles.input}
          onChangeText={ (texto) => setciudad(texto) }
        />
        <Button title='Clima' onPress={() => saludo( ciudad )} color={'red'}/>
     

      <StatusBar style="auto" />
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: "white",
    fontSize:50
  },
  input:{
    fontSize:20,
    color: 'white',
    backgroundColor: "#666",
    width: "90%",
    height: 50,
    paddingHorizontal:20,
    borderRadius:20
  }
});
