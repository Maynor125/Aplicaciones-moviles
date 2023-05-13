import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { BiMoviePlay } from 'react-icons/bi'
import Secciones from './components/Secciones';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSecundario}>
         <Text style={styles.tituloPrincipal}>Peliculas Perronas</Text>
         <TextInput placeholder='Buscar aqui' style={styles.buscador}>
       
        </TextInput>
      </View>

      <StatusBar style="auto" />
       <View style={styles.containerSecundario1}>
         <Secciones nombre='Recomedaciones'/>
       </View>
    </View>
    
  );
}



//Estilos de la aplicacion.......
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131314',
    alignItems: 'center',
    paddingTop:40,
  },
  containerSecundario: {
    width: '90%',
  },
  containerSecundario1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloPrincipal: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  buscador: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop:30,
  }
});
