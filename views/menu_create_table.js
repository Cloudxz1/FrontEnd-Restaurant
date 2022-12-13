import React, { useEffect, useState } from "react"
import { View,StyleSheet,Alert } from "react-native"
import { Button, TextInput ,Text} from "react-native-paper"


const CreateTable = () => {

    const [table,setTable] = useState("")

    return(
        <View style = {style.container}>
            <TextInput style = {style.input} placeholder="Id Table" value ={table} onChangeText = {(value) => setTable(value)} mode="outlined"/>
            <Button style ={style.button} onPress={() => createTable(table)}>
                <Text style = {style.text}>
                    Confirm
                </Text>
            </Button>
        </View>
    )
}
let createTable = (name) =>{

    fetch('http://192.168.1.163:8000/crearMesa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": name })
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      //console.log(res.url);
      return res.json();
    })
    .then(function(result){
      var result1 = result;

      if(result1.toString(result) === "ok"){
        Alert.alert("Success","Table has been successfully added");
      }else{
        Alert.alert("Error",
                "The table already exists"
                );
      }
    })
     .catch(function (error){
       console.log(error);
       Alert.alert("An unexpected error has occurred "+error);
     })
  }

  const style = StyleSheet.create({
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
     button:{
        justifyContent: 'center',
        padding: 2,
        marginTop: 10,
        backgroundColor: '#2471A3'
     },
     text:{
        color:'#FFFFFF'
        }

  })
export default CreateTable;