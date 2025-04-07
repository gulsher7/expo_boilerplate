import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { AuthStackParamList } from '@/navigation/types';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import useRTLStyles from './styles';
import { changeFirstTimeState } from '@/redux/actions/auth';

interface OTPVerificationProps {
    route: {
        params: {
            phoneNumber: string;
        };
    };
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ route }) => {
    const { phoneNumber } = route.params;
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const styles = useRTLStyles(isRTL, theme);
    const [otp, setOtp] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleContinue = () => {
        changeFirstTimeState(true);
        // TODO: Implement OTP verification logic
    };

    const handleResendOTP = () => {
        // TODO: Implement resend OTP logic
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp showBack />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View>
                            {/* Title Section */}
                            <View style={styles.titleSection}>
                                <TextComp
                                    text='OTP'
                                    style={styles.title}
                                />
                                <TextComp
                                    text='OTP_SENT_TO'
                                    values={{ phoneNumber }}
                                    style={styles.subtitle}
                                />
                            </View>

                            {/* OTP Input Section */}
                            <View style={styles.otpSection}>
                                <OTPInputView
                                    style={styles.otpInput}
                                    pinCount={6}
                                    code={otp}
                                    onCodeChanged={code => setOtp(code)}
                                    autoFocusOnLoad
                                    codeInputFieldStyle={styles.otpField}
                                    codeInputHighlightStyle={styles.otpFieldFocused}
                                    keyboardAppearance={theme === 'dark' ? 'dark' : 'light'}
                                />
                            </View>
                        </View>

                        <View>
                            {/* Button Section */}
                            <View style={styles.buttonSection}>
                                <ButtonComp
                                    title='CONTINUE'
                                    onPress={handleContinue}
                                    style={styles.continueButton}
                                // disabled={otp.length !== 6}
                                />
                            </View>

                            {/* Resend Section */}
                            <TextComp
                                text='RESEND_OTP'
                                style={styles.resendText}
                                onPress={handleResendOTP}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </WrapperContainer>
    );
};

export default OTPVerification; 