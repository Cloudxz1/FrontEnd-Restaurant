import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet} from "react-native";
import { Button,Text } from "react-native-paper";

const MenuClient = () =>{

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text >
                Select an option
            </Text>
            <Button onPress = {() => navigation.navigate('MenuProducts')} style = {styles.button}>
                <Text style = {styles.text}>Make an order</Text>
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        textAlign: 'center',
    },
    button:{
        justifyContent: 'center',
        padding: 2,
        marginTop: 10,
        backgroundColor: '#2471A3',
    },  
    text:{
        color:'#FFFFFF'
    }
})
export default MenuClient;