import { StyleSheet, Text, View,ScrollView, Image } from 'react-native';


export default function TargetaPelicula (props){
  return (
    <View style={styles.targeta}>
        <Image source={props.imagen} style={styles.imagenTargeta} />
        <Text style={styles.nombrePelicula}>
             {props.nombrePelicula}
        </Text> 
        <Text style={styles.añoPelicula}>{props.añoPelicula}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
   targeta:{
    flex: 1,
    width:150,
    height:200,
    alignItems:'center',
   },
   imagenTargeta:{
    width:130,
    height:190,
    borderRadius:8,
    shadowOpacity:2,
   },
   nombrePelicula:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
   },
   añoPelicula:{
      fontSize: 13,
      color: '#5F5D67',
   }
})
