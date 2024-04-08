import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch,ImageBackground, ScrollView } from 'react-native';

const  icon = require('./assets/nike.png');
const backgroundImage = require('./assets/backg.avif');

export default function App() {
const [habilitado, setHabilitado] = new useState(false);

const habilitar = () => {
  setHabilitado(!habilitado);
}

  return (
    <ImageBackground source={backgroundImage} style={styles.backg}>
    <View style={styles.container}>
      <Image
      source={icon}
      style={styles.icon}
      />
      <Switch
      value={habilitado}
      onValueChange={habilitar}
      />
      <Image
      source={{
        uri: (habilitado)
        ? "./assets/jordanvermelho.png"
        : "./assets/jordanazul.png"
      }}
      style={[styles.tenis, {opacity: 0.8}]}
      />
      <Image
      source={{
       

      }}
      
      />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  backg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor:'rgba(255, 255, 255, 0.5)', // Adicionando transparência ao contêiner
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width:  '208px',
    height: '108px'
  },
  tenis: {
    width:  '208px',
    height: '128px'
  },
  
});