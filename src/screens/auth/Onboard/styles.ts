import { StyleSheet } from 'react-native';

const useRTLStyles = (isRTL: boolean) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c3e50',
    },
});
};

export default useRTLStyles;