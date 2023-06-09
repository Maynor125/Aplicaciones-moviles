import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Seccion_Anime, Seccion_Recomedado, Seccion_accion} from './components/Secciones';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.subcontainer}>
         <View style={styles.containerSecundario}>
          <View style={styles.head}>
          <Text style={styles.tituloPrincipal}>Peliculas perronas</Text>
          <FontAwesome name='user' style={styles.iconocabecera} />
          </View>
         <TextInput placeholder='Buscar aqui' placeholderTextColor={'#B8B8BC'} style={styles.buscador}></TextInput>
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
  head:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
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
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop:30,
    color: '#fff',
  },
  iconocabecera:{
    fontSize: 30,
    color: '#fff',
  }
});
