import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../views/main_menu'
import MenuAdministrator from '../views/administrator_view';
import CreateCategory from '../views/menu_create_category';
import EditCategory from '../views/edit_category';
//import MenuCliente from '../views/client_view';
//import CrearCategoria from '../functions/CrearCategoria';
import CreateProduct from '../views/menu_create_product'
const stack = createNativeStackNavigator();

const MainStack = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen 
                name = 'Home'
                component={Home}
                />
                {/* <stack.Screen
                name = 'clientView'
                component={MenuClient}
                /> */}
                <stack.Screen
                name = 'administratorView'
                component={MenuAdministrator}
                />
                <stack.Screen
                name = 'CrearCategoria'
                component={CreateCategory}
                />
                <stack.Screen
                name = 'EditCategory'
                component={EditCategory}
                />
                <stack.Screen
                name = 'CreateProduct'
                component={CreateProduct}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;