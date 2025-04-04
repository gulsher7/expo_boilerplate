import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/styles/colors';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
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
    const colors = Colors[theme];

    return (
        <SafeAreaView 
            style={[styles.container, { backgroundColor: colors.background }]} 
            {...safeAreaProps}
        >
            <StatusBar barStyle={colors.statusBar} />
            <View style={[styles.childContainer, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    childContainer: {
        flex: 1,
    },
});

export default React.memo(WrapperContainer);