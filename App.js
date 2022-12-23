import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import DobScreen from './src/Screens/DobScreen';
import CallmeScreen from './src/Screens/CallMeScreen';
import SelectGenderScreen from './src/Screens/SelectGenderScreen';
import IdentifyScreen from './src/Screens/IdentifyScreen';
import LookingForScreen from './src/Screens/LookingForScreen';
import DesireScreen from './src/Screens/DesireScreen';
import AddPhotoScreen from './src/Screens/AddPhotoScreen';
import TogetherScreen from './src/Screens/TogetherScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="DobScreen" component={DobScreen} options={{headerShown: false}} />
        <Stack.Screen name="CallmeScreen" component={CallmeScreen} options={{headerShown: false}} />
        <Stack.Screen name="SelectGenderScreen" component={SelectGenderScreen} options={{headerShown: false}} />
        <Stack.Screen name="IdentifyScreen" component={IdentifyScreen} options={{headerShown: false}} />
        <Stack.Screen name="LookingForScreen" component={LookingForScreen} options={{headerShown: false}} />
        <Stack.Screen name="DesireScreen" component={DesireScreen} options={{headerShown: false}} />
        <Stack.Screen name="AddPhotoScreen" component={AddPhotoScreen} options={{headerShown: false}} />
        <Stack.Screen name="TogetherScreen" component={TogetherScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <MyStack />
  );
};

export default App;