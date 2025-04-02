import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    DimensionValue,
    View,
} from 'react-native';
import TextComp from './TextComp';
import { commonColors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import useIsRTL from '@/hooks/useIsRTL';
import fontFamily from '@/styles/fontFamily';

interface ButtonCompProps {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    width?: DimensionValue;
    height?: DimensionValue;
    variant?: 'primary' | 'secondary';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    iconSize?: number;
}

const ButtonComp: React.FC<ButtonCompProps> = ({
    onPress,
    title,
    disabled = false,
    style,
    textStyle,
    width = '100%',
    height = 48,
    variant = 'primary',
    leftIcon,
    rightIcon,
    iconSize = 24,
}) => {
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);

    const buttonStyles = [
        styles.button,
        { width, height },
        variant === 'secondary' && styles.buttonSecondary,
        disabled && styles.buttonDisabled,
        style,
    ];

    const textStyles = [
        styles.text,
        variant === 'secondary' && styles.textSecondary,
        disabled && styles.textDisabled,
        textStyle,
    ];

    const iconContainerStyle = [
        styles.iconContainer,
        { width: iconSize, height: iconSize },
    ];

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={buttonStyles}
            activeOpacity={0.8}
        >
            {leftIcon && (
                <View style={iconContainerStyle}>
                    {leftIcon}
                </View>
            )}
            <TextComp style={textStyles} text={title} />
           
            {rightIcon && (
                <View style={iconContainerStyle}>
                    {rightIcon}
                </View>
            )}
        </TouchableOpacity>
    );
};

const useRTLStyles = (isRTL: boolean) => {
    return StyleSheet.create({
        button: {
            backgroundColor: commonColors.primary,
            borderRadius: moderateScale(10),
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: isRTL ? 'row-reverse' : 'row',
            borderWidth: 1,
            borderColor: commonColors.primary,
            paddingHorizontal: moderateScale(16),
            gap: moderateScale(8),
        },
        buttonSecondary: {
            backgroundColor: commonColors.secondary,
            borderColor: commonColors.secondary,
        },
        buttonDisabled: {
            backgroundColor: commonColors.gray200,
            borderColor: commonColors.gray200,
        },
        text: {
            color: commonColors.white,
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            lineHeight: moderateScale(19),
            textAlign: 'center',
        },
        textSecondary: {
            color: commonColors.white,
        },
        textDisabled: {
            color: commonColors.gray400,
        },
        iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};

export default ButtonComp;
