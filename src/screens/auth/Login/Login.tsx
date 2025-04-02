//import liraries
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View } from 'react-native';

import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import useIsRTL from '@/hooks/useIsRTL';
import { AuthStackParamList } from '@/navigation/types';

import { useTheme } from '@/context/ThemeContext';
import useRTLStyles from './styles';

const Login = () => {
    const isRTL = useIsRTL();
    const {  theme } = useTheme();

    const styles = useRTLStyles(isRTL, theme);
    const [email, setEmail] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleNext = () => {
        navigation.navigate('OTPVerification', { phoneNumber: '1234567890' });
        // TODO: Implement next step logic
    };

    const handleSignUp = () => {
        navigation.navigate('Signup');
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp showBack={false} customStyle={styles.header} />
            <View style={styles.content}>
                <View>
                    {/* Title Section */}
                    <View style={styles.titleSection}>
                        <TextComp
                            text='SIGN_IN_TO_ACCOUNT'
                            style={styles.title}
                        />
                        <View style={styles.signUpPrompt}>
                            <TextComp
                                text='DONT_HAVE_ACCOUNT'
                                style={styles.greyText}
                            />
                            <TextComp
                                text='SIGN_UP'
                                style={styles.signUpLink}
                                onPress={handleSignUp}
                            />
                        </View>
                    </View>

                    {/* Form Section */}
                    <View style={styles.formSection}>
                        <TextComp
                            text='EMAIL_ID'
                            style={styles.inputLabel}
                        />
                        <TextInputComp
                            value={email}
                            onChangeText={setEmail}
                            placeholder='YOUR_EMAIL_ID'
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Button Section */}
                    <View style={styles.buttonSection}>
                        <ButtonComp
                            title='NEXT'
                            onPress={handleNext}
                            style={styles.nextButton}
                        />
                     
                    </View>
                </View>

                {/* Terms Section */}
                <TextComp
                    text='TERMS_AGREEMENT'
                    style={styles.termsText}
                />
            </View>
        </WrapperContainer>
    );
};

export default Login;
