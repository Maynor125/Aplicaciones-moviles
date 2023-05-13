import { StyleSheet, Text, View } from 'react-native';

export default function Secciones (props){
  return (
    <View style={styles.containerK}>
      <Text style={styles.nombreSeccion}>{props.nombre}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerK: {
    borderTopWidth:3,
    borderTopColor:'#FCC31F',
    borderTopLeftRadius:5,
    borderTopEndRadius:5,
    borderBottomWidth:3,
    borderBottomColor:'#FCC31F',
    borderBottomLeftRadius:5,
    borderBottomEndRadius:5,
    width:'90%',
    height:300,
    margin:'auto',
    marginTop:30,
  },
  nombreSeccion: {
    marginTop:5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FCC31F',
  },
})