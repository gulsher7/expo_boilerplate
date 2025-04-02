//import libraries
import React from 'react';
import { Text, View } from 'react-native';
import useRTLStyles from './styles';
import useIsRTL from '@/hooks/useIsRTL';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';

// create a component
const Settings = () => {
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp showBack={false} title="Settings" />
    
        </WrapperContainer>
    );
};


export default Settings;
