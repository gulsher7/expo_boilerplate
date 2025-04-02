import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '@/context/ThemeContext';
import { Colors, ThemeType } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';

interface ModalCompProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
    containerStyle?: ViewStyle;
    backdropOpacity?: number;
    animationIn?: string;
    animationOut?: string;
    backdropTransitionOutTiming?: number;
    animationInTiming?: number;
    animationOutTiming?: number;
}

const ModalComp: React.FC<ModalCompProps> = ({
    isVisible,
    onClose,
    children,
    containerStyle,
    backdropOpacity = 0.5,
    animationIn = 'slideInUp',
    animationOut = 'slideOutDown',
    backdropTransitionOutTiming = 300,
    animationInTiming = 300,
    animationOutTiming = 300,
}) => {
    const { theme } = useTheme();
    const styles = useStyles(theme);

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            backdropOpacity={backdropOpacity}
            animationIn={animationIn as any}
            animationOut={animationOut as any}
            backdropTransitionOutTiming={backdropTransitionOutTiming}
            animationInTiming={animationInTiming}
            animationOutTiming={animationOutTiming}
            useNativeDriver
            style={styles.modal}
            statusBarTranslucent
        >
            <View style={[styles.container, containerStyle]}>
                <View style={styles.handle} />
                {children}
            </View>
        </Modal>
    );
};

const useStyles = (theme: ThemeType) => {
    const colors = Colors[theme];

    return StyleSheet.create({
        modal: {
            margin: 0,
            justifyContent: 'flex-end',
        },
        container: {
            backgroundColor: colors.background,
            borderTopLeftRadius: moderateScale(24),
            borderTopRightRadius: moderateScale(24),
            padding: moderateScale(20),
            paddingTop: moderateScale(12),
            minHeight: moderateScale(100),
            shadowColor: colors.text,
            shadowOffset: {
                width: 0,
                height: -4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
        },
        handle: {
            width: moderateScale(40),
            height: moderateScale(4),
            backgroundColor: colors.textSecondary,
            opacity: 0.3,
            borderRadius: moderateScale(2),
            alignSelf: 'center',
            marginBottom: moderateScale(16),
        },
    });
};

export default ModalComp;
