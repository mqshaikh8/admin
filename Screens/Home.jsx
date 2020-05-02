import React,{useState} from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//components
import Login from './Login'
import ActionContainer from './ActionContainer'
function Home(){

    const [direction, setDirection] = useState("Login");
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ActionContainer" component={ActionContainer} />
        </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Home;