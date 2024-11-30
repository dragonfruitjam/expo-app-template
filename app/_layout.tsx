import {
  Image
} from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack> 
      <Stack.Screen name="index" options={{ headerShown:false }} />
      <Stack.Screen name="logged_in" options={toolbar()} />
    </Stack>
  );
}

function toolbar() {
  return ({
      headerBackVisible: false,
      headerTitleAlign: 'center',
      headerLeft:()=>(
        <Image 
        source={require('../assets/images/react-logo.png')}
        style={{width:30, height:30}}
        href='./profile'/>),
      headerRight:()=>(
        <Image 
        source={require('../assets/images/react-logo.png')}
        style={{width:30, height:30}}/>)
  }); 
}