import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './LoginScreen';

const DrawerStack = createNativeStackNavigator();
export default function HomeStackNavigation() {
  return (
     <DrawerStack.Navigator initialRouteName="LoginScreen">
      <DrawerStack.Screen
        name="LoginScreen"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </DrawerStack.Navigator >

  );
}
