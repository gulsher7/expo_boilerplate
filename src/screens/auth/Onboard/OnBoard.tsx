//import libraries
import React from 'react';
import { Text, View } from 'react-native';
import useRTLStyles from './styles';
import useIsRTL from '@/hooks/useIsRTL';    

// create a component
const OnBoard = () => {
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);
    return (
        <View style={styles.container}>
            <Text>OnBoard</Text>
        </View>
    );
};


export default OnBoard;
