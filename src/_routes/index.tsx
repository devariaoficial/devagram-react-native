import {createNativeStackNavigator} from '@react-navigation/native-stack'
import EditProfile from '../_screens/EditProfile';
import Home from '../_screens/Home';
import Login from '../_screens/Login';
import ExternalProfile from '../_screens/Profile';
import Register from '../_screens/Register';

const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={ExternalProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      );
}

export default Routes