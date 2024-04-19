import { Text, StyleSheet, TouchableOpacity,} from 'react-native';

export default function CustomButton (props) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={props.onPress}>
          <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#EEE462',
    borderRadius: 24,

    width: '100%',
    height: '100%',
    padding: 10,
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
});



/*
DOCUMENTATION:

CustomButton

Descrption: 
This is a front-end custom button component

Note:
This component will take up 100% of the size of it's parent view.
Size your buttons appropriately in the page you are implementing

Props: 
    text="myText"
        when you want to add a text element within the button

    onPress=onPress()
        what the button will do when pressed


*/