import { StyleSheet, TextInput, Text} from 'react-native';


export default function (props) {
    return(
        <>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput style={styles.field} textAlign={'center'}>{props.placeholder}</TextInput>
        </>
    );
}

const styles = StyleSheet.create({
    field: {
        backgroundColor: '#EEE462',
        width: '100%',
        height: 57,
        borderRadius: 24, 
        padding: 20,

        fontSize: 18
    },

    label: {
        fontSize: 24, 
        fontWeight: 600,
        marginBottom: 10,
    }
});