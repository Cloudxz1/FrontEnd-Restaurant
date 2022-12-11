import { useState,useEffect } from "react";
import { View } from "react-native";
import { TextInput,Text,Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const CreateProduct = () => {

    const [productId, setproductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setproductDescription] = useState("");
    const [productPrice, setproductPrice] = useState("");
    const [productStock, setproductStock] = useState("");
    const [productImage, setproductImage] = useState("");


    useEffect(() => {
        const obtainCategory = async () => {

            try {
                const url = 'http://192.168.1.163:8000/getCategoria';
                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        setCategories(result)
                        console.log(result)
                    })
                
            } catch (error) {
                console.log(error)
            }

        }
        obtainCategory();
        
    }, []);

    const obtenerCategoria = categoryId => {
        setCategories(categoryId)
    }
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>CRUD Products</Text>
            <TextInput placeholder="Ingrese el nombre de la categoria" style = {styles.input} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)} mode="outlined"/>
            <Button style = {styles.button1} onPress = {() => createProduct(nombreCat)}>
                <Text style = {styles.text1}>Add Product</Text>
            </Button>
            <Button style = {styles.button2} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)} onPress = {() => deleteProduct(nombreCat)}>
              <Text style = {styles.text1}>Delete Product</Text>
            </Button>
            <Button style = {styles.button3} onPress = {() => navegation.navigate('EditProduct')}>
              <Text style={styles.text1}>Edit Product</Text>
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


export default CreateProduct;