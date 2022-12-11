import React, {useState} from 'react'
import { View,StyleSheet,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {Button,Text,TextInput} from 'react-native-paper'

const CreateCategory = () =>{

    let [nombreCat, setNombreCat] = useState("");

    const navegation = useNavigation();
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>CRUD Categoria</Text>
            <TextInput placeholder="Ingrese el nombre de la categoria" style = {styles.input} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)} mode="outlined"/>
            <Button style = {styles.button1} onPress = {() => createCategory(nombreCat)}>
                <Text style = {styles.text1}>Add Category</Text>
            </Button>
            <Button style = {styles.button2} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)} onPress = {() => deleteCategory(nombreCat)}>
              <Text style = {styles.text1}>Delete Category</Text>
            </Button>
            <Button style = {styles.button3} onPress = {() => navegation.navigate('EditCategory')}>
              <Text style={styles.text1}>Edit Category</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding: 2,
        marginBottom: 10,
    },
    text:{
        textAlign: 'center',
        fontSize: 30,
        padding: 15
    },
    container:{
        flex: 1,
        padding: 25,
        textAlign: 'center',
     },
     button1:{
      justifyContent: 'center',
      padding: 2,
      marginTop: 10,
      backgroundColor: '#2471A3',
    },
    button2:{
      justifyContent: 'center',
      padding: 2,
      marginTop: 10,
      backgroundColor: '#C0392B',
    },
    button3:{
      justifyContent: 'center',
      padding: 2,
      marginTop: 10,
      backgroundColor: '#229954',
    },
    text1:{
        color:'#FFFFFF'
    }


});

let createCategory = (name) =>{

    fetch('http://192.168.1.163:8000/crearCategoria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombre": name })
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      //console.log(res.url);
      return res.json();
    })
    .then(function(result){
      var result1 = result;

      if(result1.toString(result) === "ok"){
        Alert.alert("Success","Se ha agregado la categoria");
      }else{
        Alert.alert("Error",
                "La categoria ya existe dentro de la base de datos"
                );
      }
    })
     .catch(function (error){
       console.log(error);
       Alert.alert("Ha ocurrido un error inesperado: "+error);
     })
  }
  let deleteCategory = (name) =>{

    fetch(`http://192.168.1.163:8000/eliminarCategoria`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombre" : name })
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(function(result){
      var result1 = result;

      if(result1.toString(result) === "ok"){
        Alert.alert("Success","Se ha eliminado la categoria");
      }else{
        Alert.alert("Error",
                "La categoria no existe dentro de la base de datos"
                );

      }
     
    })
    .catch(function (error){
      console.log(error);
      Alert.alert("Ha ocurrido un error inesperado: "+error);
    })
  };

export default CreateCategory;