import { Colors, commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme ?? 'light'];

    return useMemo(() => StyleSheet.create({
     
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        content: {
            flex: 1,
            paddingHorizontal: moderateScale(16),
            marginTop: moderateScale(24),
            justifyContent: 'space-between',
        },
        titleSection: {
            marginBottom: moderateScale(32),
        },
        title: {
            fontSize: moderateScale(22),
            fontFamily: fontFamily.bold,
            marginBottom: moderateScale(12),
            textTransform: 'uppercase',
        },
        subtitle: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.medium,
            color: colors.textSecondary,
            letterSpacing: moderateScale(-0.12),
        },
        otpSection: {
            marginTop: moderateScale(32),
        },
        otpInput: {
            width: '100%',
            height: moderateScale(50),
        },
        otpField: {
            width: moderateScale(49),
            height: moderateScale(50),
            borderWidth: 1,
            borderColor: colors.inputBorder,
            borderRadius: moderateScale(10),
            color: colors.text,
            fontSize: moderateScale(24),
            fontFamily: fontFamily.medium,
            backgroundColor: colors.inputBackground,
        },
        otpFieldFocused: {
            borderColor: commonColors.primary,
            borderWidth: 1,
        },
        buttonSection: {
            marginBottom: moderateScale(24),
        },
        continueButton: {
            height: moderateScale(48),
            backgroundColor: commonColors.primary,
        },
        resendText: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.medium,
            color: colors.textSecondary,
            textAlign: 'center',
            letterSpacing: moderateScale(-0.12),
        },
    }), [isRTL, theme, colors]); // Dependencies array includes all variables used in the styles
};

export default useRTLStyles; 