import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button,Text } from "react-native-paper";

const MenuClient = () =>{

    const navigation = useNavigation();
    return(
        <View>
            <Button onPress = {() => navigation.navigate('MenuProducts')}>
                <Text>Make an order</Text>
            </Button>
        </View>
    )
}
export default MenuClient;