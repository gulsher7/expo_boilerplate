import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/styles/colors';
import React from 'react';
import { StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

interface WrapperContainerProps extends SafeAreaViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({
    children,
    style,
    ...safeAreaProps
}) => {
    const { theme } = useTheme();
    const colors = Colors[theme ?? 'light'];

    return (
        <SafeAreaView
            style={[styles.container, style, { backgroundColor: colors.background }]}
            {...safeAreaProps}
        >
            <StatusBar barStyle={colors.statusBar} backgroundColor={colors.background} />
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default React.memo(WrapperContainer);