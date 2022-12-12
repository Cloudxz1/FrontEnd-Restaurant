import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button,Text } from "react-native-paper";

const MenuClient = () =>{

    const navigation = useNavigation();
    return(
        <View>
            <Button onPress = {() => navigation.navigate('MenuTable')}>
                <Text>Go to table</Text>
            </Button>
        </View>
    )
}
export default MenuClient;