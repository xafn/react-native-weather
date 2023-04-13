import Constants from 'expo-constants';
import { Pressable, ScrollView, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListEntry } from '../components/ListEntry';

export default function SetApiKeyScreen({ navigation }) {
    navigation.setOptions({
        headerShown: false
    });
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',

                paddingTop: insets.top + Constants.statusBarHeight,
            }}
        >
            <TextInput placeholder='Enter your API key...' style={styles.textField}>

            </TextInput>
            <Button title='Submit' ></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textField: {
        borderWidth: 1,
        width: '80%',
        borderRadius: 12,
        padding: 10,
        fontSize: 28
    }
});