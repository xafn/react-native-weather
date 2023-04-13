import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import DetailsHeader from '../components/DetailsHeader';

export default function DetailsScreen({ navigation }) {
    navigation.setOptions({
        title: '',
        headerBackTitleVisible: false,
        headerTransparent: true,
    });
    const insets = useSafeAreaInsets();

    return (
        <ScrollView>
            <DetailsHeader>
                    <Text style={styles.headerSubtitle}>Moscow</Text>
                    <Text style={styles.headerTitle}>2°</Text>
                    <Text style={styles.descriptionSubtitle}>Feels like 0°</Text>
            </DetailsHeader>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    weatherHeader: {
        padding: 36,
        backgroundColor: "#fafafa",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    headerTitle: {
        fontSize: 96,
        fontWeight: "400"
    },
    headerSubtitle: {
        fontSize: 36,
        fontWeight: "400"
    },
    descriptionSubtitle: {
        fontSize: 18,
        fontWeight: "400"
    }
});
