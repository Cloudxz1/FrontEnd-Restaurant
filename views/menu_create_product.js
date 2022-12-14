import { useState,useEffect } from "react";
import { View ,Alert} from "react-native";
import { TextInput,Text,Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import axios from "axios";
//import { launchImageLibrary } from 'react-native-image-picker'
const CreateProduct = () => {

    const [productName, setProductName] = useState("");
    const [productDescription, setproductDescription] = useState("");
    const [productPrice, setproductPrice] = useState("");
    const [productStock, setproductStock] = useState("");
    const [productImage, setproductImage] = useState("");
    const [categories,setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();


    useEffect(() => {
        getCategory();
      }, []);

    const getCategory = async () => {
    const response = await axios
        .get(`http://10.12.8.198:8000/getCategoria`)
        .then(res => {
        setCategories(res.data);
        setCategoryName(res.data);
        console.log(res.data)
        })
        .catch(error => console.log(error));
    };

    return(
        <View style = {styles.container}>
            <Text style={styles.text}>Create Product</Text>
            <TextInput placeholder="enter the name" style = {styles.input} value ={productName} onChangeText = {(value) => setProductName(value)} mode="outlined"/>
            <TextInput placeholder="enter the price" style = {styles.input} value ={productPrice} onChangeText = {(value) => setproductPrice(value)} mode="outlined" keyboardType="numeric"/>
            <TextInput placeholder="enter the stock" style = {styles.input} value ={productStock} onChangeText = {(value) => setproductStock(value)} mode="outlined" keyboardType="numeric"/>
            <TextInput placeholder="enter the description" style = {styles.input} value ={productDescription} onChangeText = {(value) => setproductDescription(value)} mode="outlined" numberOfLines={5}/>
            <Picker selectedValue={selectedCategory} onValueChange={(itemValue) =>
                              setSelectedCategory(itemValue)}>
                <Picker.Item label="Select a category" value ={categoryName} onChangeText = {(value) => setCategoryName(value)} />
                            {categories.map(categoryName => (
                                <Picker.Item key={categoryName} label={categoryName} value={categoryName} />
                            ))}
            </Picker>
            <Button style = {styles.button1} onPress = {() => createProduct(productName,productPrice,productStock,productDescription,selectedCategory)} mode="contained-tonal">
                <Text style = {styles.text1}>Add Product</Text>
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
        fontSize: 20,
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

const createProduct = (Name,Price,Stock,Description,category) => {
    fetch('http://10.12.8.198:8000/crearProducto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombre": Name,
        "precio": Price,
        "stock": Stock,
        "descripcion": Description,
        "categoria": category})
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(function(result){
      var result1 = result;

      if(result1.toString(result) === "ok"){
        Alert.alert("Success","Product has been added");
      }else{
        Alert.alert("Error",
                "The product already exists"
                );
      }
    })
     .catch(function (error){
       console.log(error);
       Alert.alert("An unexpected error has occurred: "+error);
     })


}

export default CreateProduct;