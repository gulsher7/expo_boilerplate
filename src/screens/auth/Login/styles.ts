import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme ?? 'light'];
   
    return useMemo(() => StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: moderateScale(16),
        },
        content: {
            flex: 1,
            marginTop: moderateScale(24),
            justifyContent: 'space-between',
        },
        titleSection: {
            marginBottom: moderateScale(32),
        },
        title: {
            fontSize: moderateScale(22),
            marginBottom: moderateScale(12),
            textTransform: 'uppercase',
            fontFamily: fontFamily.bold,
        },
        signUpPrompt: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            gap: moderateScale(6),
        },
        greyText: {
            fontSize: moderateScale(12),
            color: colors.inputPlaceholder,
            fontFamily: fontFamily.regular,
        },
        signUpLink: {
            fontSize: moderateScale(12),
            color: commonColors.secondary,
            fontFamily: fontFamily.medium,
            textDecorationLine: 'underline',
            letterSpacing: 0.5,

        },
        formSection: {
            marginBottom: moderateScale(24),
        },
        inputLabel: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            marginBottom: moderateScale(10),
        },
        buttonSection: {
            marginBottom: moderateScale(24),
        },
        nextButton: {
            height: moderateScale(48),
            backgroundColor: commonColors.primary,
        },
        termsText: {
            fontSize: moderateScale(12),
            color: colors.inputPlaceholder,
            fontFamily: fontFamily.regular,
            textAlign: 'center',
        },
        header:{
            paddingHorizontal: 0
        }
    }), [isRTL, theme, colors]); // Dependencies array includes all variables used in the styles
};

export default useRTLStyles;