import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DetailsHeader(props) {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView>
            <View style={styles.header}>
                <SafeAreaView
                    style={{ alignItems: 'center', paddingTop: insets.top }}
                >
                    {props.children}
                </SafeAreaView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 36,
        backgroundColor: "#fafafa",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
});
