import { useNavigation } from "@react-navigation/native"
import React from "react"
import {View,StyleSheet} from "react-native"
import {Button,Text} from 'react-native-paper'


const MenuAdministrator = () =>{

    

    const navigation = useNavigation();
    return(
        <View style = {style.container}>
            <Text style = {style.text}>Options</Text>
            <Button style = {style.button1} mode = "contained-tonal" onPress = {()=> navigation.navigate('CreateCategory')}>
                <Text style = {style.text1}> Create Category</Text>
            </Button>
            <Button mode="contained-tonal" style = {style.button2} onPress = {()=> navigation.navigate('CreateProduct')}>
                <Text style = {style.text1}>Create Product</Text>
            </Button>
            <Button mode="contained-tonal" style = {style.button3} onPress = {()=> navigation.navigate('CreateTable')}>
                <Text style = {style.text1}>Create Table</Text>
            </Button>
        </View>
    )
}
const style = StyleSheet.create({
    text:{
        marginTop: 30,
        textAlign: 'center',
        fontSize: 20,
    },
    text1:{
        color:'#FFFFFF'
    },
    container:{
        flex: 1,
        padding: 50,
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
        backgroundColor: '#7D3C98',
      }
});
export default MenuAdministrator;