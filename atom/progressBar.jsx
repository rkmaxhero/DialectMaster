import { Text, StyleSheet,View, TouchableOpacity} from 'react-native';

import CustomButton from './CustomButton';

export default function ProgressBar (props) {
    const progress = props.percent || 0;
    return (
        <View style={styles.container}>
        <Text style={styles.buttonText}>{props.region} REGION</Text>

        <View style={styles.progressBarOuter}>
            <View style={{...styles.progressBarInner, width: `${progress}%`}}>
            </View>
        </View>

        <Text style={styles.buttonText}>{progress} %</Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={props.onPress}>
        <Text style={styles.buttonText}>{progress > 0 ? 'Continue learning' : 'Start learning'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={props.onPress}>
        <Text style={styles.buttonText}>test</Text>
        </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE462',
        width: '100%',
        height: '45%',
        justifyContent: 'space-around', 
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
    
        backgroundColor: '#98CBEB',
        borderRadius: 24,
    
        width: '85%',
        padding: 10,
      },

      buttonText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 600,
        textTransform: 'uppercase',
      },

      progressBarOuter: {
        width: '85%',
        height: 20,
        backgroundColor: 'white',
        borderRadius: 50,
      },

      progressBarInner: {
        height: '100%',
        backgroundColor: '#98CBEB',
        borderRadius: 50,
      },


});



/*
DOCUMENTATION:
    required props: regoin=''
    optional props: percent=''
    EX: 
    <ProgressBar region='southwest' percent='10' ></ProgressBar>
*/