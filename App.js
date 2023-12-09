import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import BanListScreen from './screens/banListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Use the Stack.Navigator for navigation */}
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        {/* Define screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BanListScreen" component={BanListScreen} options={{ title: 'Second Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;