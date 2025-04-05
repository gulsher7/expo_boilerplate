import { StyleSheet } from 'react-native';

const useRTLStyles = (isRTL: boolean) => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};

export default useRTLStyles;