import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native';
import TargetaPelicula from './Tragetas-peliculas';



export function Seccion_Recomedado (props){
  return (
    <View style={styles.containerK}>
      <Text style={styles.nombreSeccion}>{props.nombre}</Text>
      <ScrollView horizontal style={styles.containerPelis} >
      <TargetaPelicula nombrePelicula="Mario Bros" añoPelicula="2023" imagen={require('../public/images/nuevos/646008.jpg')} />
          <TargetaPelicula imagen={require('../public/images/nuevos/463444.jpg')} nombrePelicula="Shazam ll" añoPelicula="2023" />
          <TargetaPelicula imagen={require('../public/images/nuevos/1063147.jpg')} nombrePelicula="Avatar ll" añoPelicula="2023"/> 
      </ScrollView>
    </View>
  )
}

 export function Seccion_accion (props){
  return (
    <View style={styles.containerK}>
      <Text style={styles.nombreSeccion}>{props.nombre}</Text>
      <ScrollView horizontal style={styles.containerPelis} >
          <TargetaPelicula nombrePelicula="Morbius" añoPelicula="2021" imagen={require('../public/images/1215951.jpg')} />
          <TargetaPelicula imagen={require('../public/images/1309541.jpeg')} nombrePelicula="Creed lll" añoPelicula="2023" />
          <TargetaPelicula imagen={require('../public/images/1249477.jpg')} nombrePelicula="Doctor Strange" añoPelicula="2022"/>    
      </ScrollView>
    </View>
  )
}
 export function Seccion_Anime (props){
  return (
    <View style={styles.containerK}>
      <Text style={styles.nombreSeccion}>{props.nombre}</Text>
      <ScrollView horizontal style={styles.containerPelis} >
          <TargetaPelicula nombrePelicula="Jujutsu Kaisen" añoPelicula="2021" imagen={require('../public/images/anime/1200429.jpg')} />
          <TargetaPelicula imagen={require('../public/images/anime/632011.jpg')} nombrePelicula="Dragon Ball" añoPelicula="2018" />
          <TargetaPelicula imagen={require('../public/images/anime/1008472.png')} nombrePelicula="Demon Slayer" añoPelicula="2019"/>    
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  containerK: {
    borderTopWidth:2,
    borderTopColor:'#9D5EBA',
    borderTopLeftRadius:5,
    borderTopEndRadius:5,
    borderBottomWidth:2,
    borderBottomColor:'#9D5EBA',
    borderBottomLeftRadius:5,
    borderBottomEndRadius:5,
    width:'100%',
    height:300,
    margin:'auto',
    marginTop:30,
  },
  nombreSeccion: {
    marginTop:8,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FCC31F',
    marginBottom:10,
  },
  containerPelis: {
    width:'100%',
    height:300,
  }
})
