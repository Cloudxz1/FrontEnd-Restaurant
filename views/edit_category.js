import { Picker } from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react'
import { View,StyleSheet} from 'react-native'
import {Button,TextInput,Text, IconButton} from 'react-native-paper'
import axios from 'axios'

const EditCategory = () =>{

    const url = "http://192.168.1.163:8000/getCategoria";
    const [categories,setCategories] = useState([]);
    const [nombreCat,setnombreCat] = useState("");

    const obtainCategory = async () => {

      try {
          const {data} = await axios.get(url);
          const {categories} = data;
          setCategories(categories);
          
      } catch (error) {
          console.log(error)
      }

    }
    useEffect(() => {
      obtainCategory();
    }, []);

    return(
        <View style = {styles.container}>
            <Text style={styles.text} variant ="titleMedium">Edit Category</Text>
            <Picker selectedValue={nombreCat} onValueChange={obtainCategory()}>
                        <Picker.Item label="- Select -" value="" />
                        {categories.map(nombreCat => (
                            <Picker.Item key={nombreCat.id} label={nombreCat.nombre} value={nombreCat.nombre} />
                        ))}
            </Picker>
        </View>
            // <TextInput placeholder="El nuevo nombre de la categoria" style = {styles.input} value ={setCategoria} onChangeText = {(value) => setNombreCatNuevo(value)}/>
            // <Button style = {styles.button1} mode="outline" textColor="#FFFFFF" onPress = {() => updateCategory(categoria,nombreCatNuevo)}>
            //   Confirmar
            // </Button>
        
    )
}
const styles = StyleSheet.create({
    input:{ 
        padding: 1,
        marginBottom: 10,
    },
    text:{
        textAlign: 'center',
        fontSize: 25,
        padding: 20,
    },
    container:{
        flex:1,
        padding: 20,
        textAlign: 'center',
     },
    button1:{
      backgroundColor: '#900C3F',
    },
    text1:{
      color:'#FFFFFF'
    },
    buttonBack:{

    }


});

let updateCategory = (name,name1) =>{

    fetch('http://192.168.1.163:8000/editarCategoria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombreActualCategoria": name,
        "nuevoNombre" : name1 })
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };
export default EditCategory;