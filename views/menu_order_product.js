import { FlatList, View,StyleSheet,Text,Button,Alert, ScrollView } from "react-native";
import axios from "axios";
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

    const DATA2 = [
      product

    ];
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    
    const renderItem = ({ item }) => (
        <View>
          <ScrollView>
          <Item title={item[0]} /> 
          <Button
          title="Comprar"
          onPress={() => Alert.alert('Simple Button pressed')}/>
          </ScrollView>
        </View>  

        
      );

    useEffect(() => {
        getTables();
        getProduct();
      }, []);
  
  
      const getTables = async () => {
        const response = await axios
          .get(`http://192.168.1.163:8000/getMesa`)
          .then(res => {
            setTable(res.data);
            setTableName(res.data);
            console.log(res.data)
          })
          .catch(error => console.log(error));
      };

      const getProduct = async () => {
        const response = await axios
          .get(`http://192.168.1.163:8000/getProducto`)
          .then(res => {
            setProduct(res.data);
            setProductName(res.data);
            setProductPrice(res.data);
            setProductCategory(res.data);
            console.log(res.data)
          })
          .catch(error => console.log(error));
      };
return(
    <View>
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
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default MenuTable;