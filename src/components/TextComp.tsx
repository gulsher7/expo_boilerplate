import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { moderateScale } from '@/styles/scaling';
import fontFamily from '@/styles/fontFamily';
import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/styles/colors';
import useIsRTL from '@/hooks/useIsRTL';
interface TextCompProps extends TextProps {
    text?: string;
    values?: Record<string, any>;
    style?: any;
    children?: React.ReactNode;
    isDynamic?: boolean;
}

const TextComp: React.FC<TextCompProps> = ({
    text,
    style,
    children,
    values,
    isDynamic = false,
    ...props
}) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const colors = Colors[theme];
    const isRTL = useIsRTL();

    const styles = useRTLStyles(isRTL);
    if (text && !isDynamic) {
        return (
            <Text style={[styles.text, { color: colors.text }, style]} {...props}>
                {String(values ? t(text, values) : t(text))}
            </Text>
        );
    }

    // If no text, just render the children directly
    return (
        <Text style={[styles.text, { color: colors.text }, style]} {...props}>
            {text}
        </Text>
    );
};

const useRTLStyles = (isRTL: boolean) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: fontFamily.regular,
            fontSize: moderateScale(14),
            textAlign: isRTL ? 'right' : 'left',
        },
    });
    return styles;
};
export default React.memo(TextComp);
