import { Colors, commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

const useRTLStyles = (isRTL: boolean, theme?: ThemeType) => {
    const colors = Colors[theme];

    return useMemo(() => StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scrollView: {
            flex: 1,
            paddingHorizontal: moderateScale(16),
        },
        backButton: {
            marginBottom: moderateScale(24),
        },
        backIcon: {
            width: moderateScale(24),
            height: moderateScale(24),
        },
        headerContainer: {
            marginBottom: moderateScale(32),
        },
        headerTitle: {
            fontFamily: fontFamily.bold,
            fontSize: moderateScale(22),
            lineHeight: moderateScale(28),
            textTransform: 'uppercase',
            marginBottom: moderateScale(12),
        },
        loginContainer: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            gap: moderateScale(6),
        },
        loginText: {
            fontFamily: fontFamily.medium,
            fontSize: moderateScale(12),
            lineHeight: moderateScale(17),
            color: colors.textSecondary,
        },
        loginLink: {
            fontFamily: fontFamily.semiBold,
            fontSize: moderateScale(12),
            lineHeight: moderateScale(17),
            color: commonColors.secondary,
            textDecorationLine: 'underline',
        },
        formContainer: {
            gap: moderateScale(20),
        },
        inputGroup: {
            gap: moderateScale(10),
        },
        label: {
            fontFamily: fontFamily.medium,
            fontSize: moderateScale(16),
        },
        submitButton: {
            marginTop: moderateScale(10),
        },
        header:{
            marginBottom: verticalScale(16)
        }
    }), [isRTL, theme, colors]); // Dependencies array includes all variables used in the styles
};

export default useRTLStyles;
