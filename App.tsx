import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/screens/ListScreen';
import SetApiKeyScreen from './src/screens/SetApiKeyScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DetailsScreen from './src/screens/DetailsScreen';
import { isApiKeyPresent } from './src/utils/ApiKey';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isApiKeyPresent ? (
            <Stack.Screen name="Weather" component={ListScreen} />
          ) : (
            <Stack.Screen name="SetApiKey" component={SetApiKeyScreen} />
          )}
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}