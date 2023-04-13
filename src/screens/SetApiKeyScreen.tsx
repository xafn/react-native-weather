import Constants from 'expo-constants';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListEntry } from '../components/ListEntry';

export default function SetApiKeyScreen({ navigation }) {
    navigation.setOptions({
        headerShown: false
    });
    const insets = useSafeAreaInsets();

    return (
        <View></View>
    );
}

const styles= StyleSheet.create({
    entries: {
        flex: 1,
        width: '100%',
    }
});