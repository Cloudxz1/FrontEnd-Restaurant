import { FlatList, View,StyleSheet,Text,Alert, ScrollView } from "react-native";
import axios from "axios";
import {Button} from "react-native-paper"
import { Picker } from '@react-native-picker/picker';
import React ,{useEffect,useState} from "react"
import { useNavigation } from "@react-navigation/native";

const MenuTable = () =>{

    const [table,setTable] = useState([]);
    const [tableName, setTableName] = useState("");
    const [selectedTable, setSelectedTable] = useState();
    const [product,setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice,setProductPrice] = useState([]);
    const [productCategory, setProductCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedValue, setSelectedValue] = useState("");
    

    const navigation =  useNavigation();
    
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    
    const renderItem = ({ item }) => (
        <View>
          <ScrollView>
          <Item title={item[0] +"\n "+"precio:" + item[2]}/> 
          <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          </Picker>
          <Button style = {styles.button} onPress ={()=>createOrder(item[2],"1",item[1],item[0],1)} >
            <Text style = {styles.text}>
                Buy
            </Text>
          </Button>
          </ScrollView>
        </View>  

        
      );

    useEffect(() => {
        getTables();
        getProduct();
    }, []);
  
  
      const getTables = async () => {
        const response = await axios
          .get(`http://10.12.8.198:8000/getMesa`)
          .then(res => {
            setTable(res.data);
            setTableName(res.data);
            console.log(res.data)
          })
          .catch(error => console.log(error));
      };

      const getProduct = async () => {
        const response = await axios
          .get(`http://10.12.8.198:8000/getProducto`)
          .then(res => {
            setProduct(res.data);
            setProductName(res.data);
            setProductPrice(res.data);
            setProductCategory(res.data);
            console.log(res.data)
          })
          .catch(error => console.log(error));
      };
      const createOrder = (totalPagar,mesa,idProducto,nombreProducto,cantidadProducto) => {
        fetch('http://10.12.8.198:8000/crearPedido', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "totalPagar": totalPagar,
            "horaEstimada": " ",
            "mesa": mesa,
            "idProducto": idProducto,
            "nombreProducto": nombreProducto,
            "cantidadProducto": cantidadProducto})
        })
        .then(res => {
          console.log(res.status);
          console.log(res.headers);
          return res.json();
        })
        .then(function(result){
          var result1 = result;

          if(result1.toString(result) === "ok"){
            Alert.alert("Success","Order has been added");
          }else{
            Alert.alert("Error",
                    "The order already exists"
            );
          }
        })
        .catch(function (error){
          console.log(error);
          Alert.alert("An unexpected error has occurred: "+error);
        })
      }
return(
    <View>
      <Text style={styles.title}>Select the table</Text>
        <Picker selectedValue={selectedTable} onValueChange={(itemValue) =>
                              selectedTable(itemValue)}>
                        <Picker.Item label="Select a table" value ={tableName} onChangeText = {(value) => setSelectedTable(value)} />
                        {table.map(tableName => (
                            <Picker.Item key={tableName} label={tableName} value={tableName} />
                        ))}
        </Picker>
        <FlatList
          renderItem={renderItem}
          keyExtractor = {item => item[0]}
          data = {product}
        />
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color:'#FFFFFF'
  },
  title:{
    textAlign: 'center',
    fontSize: 20,
    padding: 15
  },
  button:{
    justifyContent: 'center',
    padding: 2,
    marginTop: 10,
    backgroundColor: '#2471A3',
  },
});
export default MenuTable;