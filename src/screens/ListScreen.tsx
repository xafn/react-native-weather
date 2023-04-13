import Constants from 'expo-constants';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListEntry } from '../components/ListEntry';

export default function ListScreen({ navigation }) {
    navigation.setOptions({
        title: 'Weather',
        headerLargeTitle: false,
        headerTransparent: true,
        headerSearchBarOptions: {
            hideWhenScrolling: false
        },
    });
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',

                // Paddings to handle safe area
                paddingTop: insets.top + Constants.statusBarHeight,
                marginBottom: insets.bottom,
                marginLeft: insets.left,
                marginRight: insets.right,
            }}
        >
            <ScrollView style={styles.entries}>
                <ListEntry onPress={() => navigation.navigate('Details')} name="Moscow" time={new Date()} temp={3} weather="Cloudy"></ListEntry>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    entries: {
        flex: 1,
        width: '100%',
    }
});