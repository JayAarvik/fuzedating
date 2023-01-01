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
import PermissionScreen from './src/Screens/PermissionScreen';
import ImproveScreen from './src/Screens/ImproveScreen';
import EditProfileScreen from './src/Screens/EditProfileScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SettingsScreen from './src/Screens/SettingScreen';
import SeeConnScreen from './src/Screens/SeeConnScreen';
import SafeScreen from './src/Screens/SafeScreen';

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
        <Stack.Screen name="PermissionScreen" component={PermissionScreen} options={{headerShown: false}} />
        <Stack.Screen name="ImproveScreen" component={ImproveScreen} options={{headerShown: false}} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false}} />
        <Stack.Screen name="SeeConnScreen" component={SeeConnScreen} options={{headerShown: false}} />
        <Stack.Screen name="SafeScreen" component={SafeScreen} options={{headerShown: false}} />
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