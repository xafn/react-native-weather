import Constants from 'expo-constants';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

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
                <Pressable onPress={() => navigation.navigate('Details')}>
                    <View style={styles.entryContainer}>
                        <View style={styles.entryRow}>
                            <Text style={styles.entryHeaderText}>Moscow</Text>
                            <Text style={styles.entryHeaderText}>2°</Text>
                        </View>

                        <View style={styles.entryRow}>
                            <Text style={styles.entrySubtitleText}>{new Date().getHours() + ':' + new Date().getMinutes()}</Text>
                            <Text style={styles.entrySubtitleText}>Sunny</Text>

                        </View>
                    </View>
                </Pressable>
                <View style={styles.entryContainer}>
                    <View style={styles.entryRow}>
                        <Text style={styles.entryHeaderText}>London</Text>
                        <Text style={styles.entryHeaderText}>5°</Text>
                    </View>

                    <View style={styles.entryRow}>
                        <Text style={styles.entrySubtitleText}>{new Date().getHours() - 2 + ':' + new Date().getMinutes()}</Text>
                        <Text style={styles.entrySubtitleText}>Cloudy</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    entries: {
        flex: 1,
        width: '100%',
    },
    entryContainer: {
        height: 'auto',
        width: '100%',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center',
        borderBottomWidth: 0.3,
        borderColor: "#afafaf"
    },
    entryRow: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    entryHeaderText: {
        fontSize: 32,
        fontWeight: "500"
    },
    entrySubtitleText: {
        fontSize: 18,
        fontWeight: "400"
    }
});