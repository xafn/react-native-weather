import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/screens/ListScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DetailsScreen from './src/screens/DetailsScreen';
import { isApiKeyPresent } from './src/utils/isApiKeyPresent';


const Stack = createNativeStackNavigator();
export default async function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isApiKeyPresent ? (
            <Stack.Screen name="Details" component={DetailsScreen} />
          ) : (
            <Stack.Screen name="Weather" component={ListScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}