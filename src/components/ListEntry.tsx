import { Pressable, TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent } from "react-native";

type ListEntryProps = {
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
    name: string,
    time: Date,
    temp: number,
    weather: string
};

export const ListEntry = (props: ListEntryProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.entryContainer}>
                <View style={styles.entryRow}>
                    <Text style={styles.entryHeaderText}>{ props.name }</Text>
                    <Text style={styles.entryHeaderText}>{ props.temp }°</Text>
                </View>

                <View style={styles.entryRow}>
                    <Text style={styles.entrySubtitleText}>{ props.time.getHours() + ':' + new Date().getMinutes() }</Text>
                    <Text style={styles.entrySubtitleText}>{ props.weather }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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