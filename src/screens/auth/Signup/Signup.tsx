import { BackArrowIcon, EyeIcon } from '@/assets/icons';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { AuthStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import useRTLStyles from './styles';
import useIsRTL from '@/hooks/useIsRTL';
import { useTheme } from '@/context/ThemeContext';
import HeaderComp from '@/components/HeaderComp';

type SignupScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

// create a component
const Signup = () => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const styles = useRTLStyles(isRTL, theme);

    const navigation = useNavigation<SignupScreenNavigationProp>();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };



    return (
        <WrapperContainer>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <HeaderComp customStyle={styles.header} />
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >

                    <View style={styles.headerContainer}>
                        <TextComp text="REGISTER" style={styles.headerTitle} />
                        <View style={styles.loginContainer}>
                            <TextComp text="ALREADY_HAVE_ACCOUNT" style={styles.loginText} />
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <TextComp text="LOG_IN" style={styles.loginLink} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <TextComp text="FULL_NAME" style={styles.label} />
                            <TextInputComp
                                placeholder="YOUR_NAME"
                                value={formData.fullName}
                                onChangeText={(text) => handleChange('fullName', text)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="EMAIL_ADDRESS" style={styles.label} />
                            <TextInputComp
                                placeholder="YOUR_EMAIL"
                                value={formData.email}
                                onChangeText={(text) => handleChange('email', text)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="PHONE_NUMBER" style={styles.label} />
                            <TextInputComp
                                placeholder="YOUR_PHONE"
                                value={formData.phone}
                                onChangeText={(text) => handleChange('phone', text)}
                                keyboardType="phone-pad"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="PASSWORD" style={styles.label} />
                            <TextInputComp
                                placeholder="WRITE_HERE"
                                value={formData.password}
                                onChangeText={(text) => handleChange('password', text)}
                                secureTextEntry={!showPassword}
                                rightIcon={<EyeIcon />}
                                onRightIconPress={() => setShowPassword(!showPassword)}

                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="CONFIRM_PASSWORD" style={styles.label} />
                            <TextInputComp
                                placeholder="WRITE_HERE"
                                value={formData.confirmPassword}
                                onChangeText={(text) => handleChange('confirmPassword', text)}
                                secureTextEntry={!showConfirmPassword}
                                rightIcon={<EyeIcon />}
                                onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                        </View>

                        <ButtonComp
                            title="NEXT"
                            onPress={handleSubmit}
                            style={styles.submitButton}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </WrapperContainer>
    );
};

export default Signup;
