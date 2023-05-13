import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Seccion_Anime, Seccion_Recomedado, Seccion_accion} from './components/Secciones';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.subcontainer}>
         <View style={styles.containerSecundario}>
         <Text style={styles.tituloPrincipal}>Peliculas perronas</Text>
         <TextInput placeholder='Buscar aqui' style={styles.buscador}></TextInput>
      </View>
       <View style={styles.containerSecundario1}>
       <Seccion_Recomedado nombre='Recomendado'/>
       <Seccion_accion nombre='Accion'/>
       <Seccion_Anime nombre="Anime"/>
       </View>
      </ScrollView>
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
    paddingBottom:40,
  },
  subcontainer:{
    width: '90%',
  },
  containerSecundario: {
    width: '100%',
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
