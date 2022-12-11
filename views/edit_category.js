import { Picker } from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react'
import { View,StyleSheet} from 'react-native'
import {Button,TextInput,Text, IconButton} from 'react-native-paper'
import axios from 'axios'


const EditCategory = () =>{

    const url = "http://192.168.1.163:8000/getCategoria";
    const [categories,setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();
    const [categoryNameNew , setCategoryNameNew] = useState("");

    
    useEffect(() => {
      getCategory();
    }, []);


    const getCategory = async () => {
      const response = await axios
        .get(`http://192.168.1.163:8000/getCategoria`)
        .then(res => {
          setCategories(res.data);
          setCategoryName(res.data);
          console.log(res.data)
        })
        .catch(error => console.log(error));
    };

    const obtainCategory = categoryName =>{
      setCategories(categoryName)
    }
    return(
        <View style = {styles.container}>
            <Text style={styles.text} variant ="titleMedium">Edit Category</Text>
            <Picker selectedValue={selectedCategory} onValueChange={(itemValue) =>
                              setSelectedCategory(itemValue)}>
                        <Picker.Item label="Select a category" value ={categoryName} onChangeText = {(value) => setCategoryName(value)} />
                        {categories.map(categoryName => (
                            <Picker.Item key={categoryName} label={categoryName} value={categoryName} />
                        ))}
            </Picker>
          <View>
            <TextInput placeholder="El nuevo nombre de la categoria" style = {styles.input} value ={setCategoryName} onChangeText = {(value) => setCategoryNameNew(value)}/>
            <Button style = {styles.button1} mode="outline" textColor="#FFFFFF" onPress = {() => updateCategory(selectedCategory,categoryNameNew)}>
              Confirmar
            </Button>
          </View>
        </View>
            
        
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
    dropdown: {
      height: 50,
      borderColor: '#000000',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 10,
    },
    label: {
      position: 'absolute',
      backgroundColor: '#000000',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
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