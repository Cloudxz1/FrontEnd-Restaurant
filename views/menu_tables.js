import { FlatList, View,StyleSheet,Text } from "react-native";
import axios from "axios";
import React ,{useEffect,useState} from "react"
const MenuTable = () =>{

    const [table,setTable] = useState([]);
    const [tableName, setTableName] = useState("");
    const [selectedTable, setSelectedTable] = useState();
    const [product,setProduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice,setProductPrice] = useState([]);
    const [productCategory, setProductCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState();


    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];

    const DATA2 = [
      product

    ];
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    
    const renderItem = ({ item }) => (
        <Item title= {categories.map()}/>
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
          data = {DATA2}
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