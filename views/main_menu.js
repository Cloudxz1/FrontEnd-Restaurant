import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme,Button } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';


const Home = () => {
  const navigation = useNavigation();
  return(
    <PaperProvider>
          <View style={styles.container}>
            
            <Text style={styles.title1}>Welcome to the App.</Text>
            <Text style={styles.title2}>Choose a role</Text>
            
            <Button onPress={()=> navigation.navigate('clientView')} style = {styles.button1} mode="contained-tonal">
              <Text style={styles.title4}>Client</Text>
            </Button>
            
            <Button  onPress={() => navigation.navigate('administratorView') } style = {styles.button2} mode="contained-tonal">
              <Text style= {styles.title4}>Administrator</Text>
            </Button>
      </View>
    </PaperProvider>
      
  
    );
  }
  const styles = StyleSheet.create({
      container:{
         flex: 1,
         textAlign: 'center',
         padding:20,
         marginTop: 150,
      },
      title1: {
          textAlign: 'center',
          marginVertical: 8,
          fontSize: 30
      },
      title2: {
          textAlign: 'center',
          marginVertical: 5,
      },
      title3:{
        textAlign: 'center',
        marginVertical: 30,
      },
      title4:{
        textAlign: 'center',
        color:'#FFFFFF',

      },
      texto:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button1:{
        justifyContent: 'center',
        padding: 2,
        marginTop: 10,
        backgroundColor: '#1A5276',
      },
      button2:{
        justifyContent: 'center',
        backgroundColor: '#BA4A00',
        padding: 2,
        marginTop: 10,
      }
  }); 
export default Home;