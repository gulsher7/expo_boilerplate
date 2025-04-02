import { BackArrowIcon, SettingsIcon } from '@/assets/icons';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { changeLanguageState } from '@/redux/actions/settings';
import { useSelector } from '@/redux/hooks';
import { Colors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import ModalComp from './ModalComp';
import { LanguageInterface } from '@/redux/reducers/settings';
import { secureStorage } from '@/utils/secureStorage';
import { clearDataAction } from '@/redux/actions/auth';
import ButtonComp from './ButtonComp';
interface HeaderCompProps {
    title?: string;
    showBack?: boolean;
    customStyle?: object;
}

const HeaderComp: React.FC<HeaderCompProps> = ({
    title,
    showBack = true,
    customStyle,
}) => {
    const navigation = useNavigation();
    const { theme, toggleTheme } = useTheme();
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL, theme);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const colors = Colors[theme];

    const { defaultTheme } = useSelector(state => state.settings);
    const { isFirstTime } = useSelector(state => state.auth);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const changedTheme = async () => {
        const newTheme = defaultTheme.myTheme === 'light' ? 'dark' : 'light';
        await secureStorage.setItem('THEME', newTheme);
        toggleTheme();
        closeModal();
    }

    const changedLanguage = (language: LanguageInterface) => {
        changeLanguageState(language);
        closeModal();
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }

    const onLogout = () => {
        closeModal();
        setTimeout(() => {
            clearDataAction();
        }, 400);
    }

    return (
        <View style={[styles.container, customStyle]}>
            {showBack ?
                <TouchableOpacity
                    onPress={handleBackPress}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <BackArrowIcon />
                </TouchableOpacity>
                : <View />}

            {title && (
                <TextComp
                    text={title}
                    style={styles.titleText}
                />
            )}

            <Pressable onPress={() => setIsModalVisible(true)}>
                <SettingsIcon fill={colors.text} width={20} height={20} />
            </Pressable>

            <ModalComp isVisible={isModalVisible} onClose={closeModal}>
                <View style={styles.modalContainer}>
                    <TextComp
                        text="SETTINGS"
                        style={styles.modalTitle}
                    />
                    <View style={styles.section}>
                        <TextComp
                            text="LANGUAGE"
                            style={styles.sectionTitle}
                        />
                        <View style={styles.optionRow}>
                            <TouchableOpacity
                                style={[styles.optionButton, isRTL && styles.optionButtonActive]}
                                onPress={() => changedLanguage({ name: 'Arabic', sortName: 'ar' })}
                            >
                                <TextComp text="Arabic" isDynamic style={[
                                    styles.optionText,
                                    isRTL && styles.optionTextActive
                                ]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.optionButton, !isRTL && styles.optionButtonActive]}
                                onPress={() => changedLanguage({ name: 'English', sortName: 'en' })}
                            >
                                <TextComp text="English" isDynamic style={[
                                    styles.optionText,
                                    !isRTL && styles.optionTextActive
                                ]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <TextComp
                            text="THEME"
                            style={styles.sectionTitle}
                            isDynamic={false}
                        />
                        <View style={styles.optionRow}>
                            <TouchableOpacity
                                style={[styles.optionButton, theme === 'light' && styles.optionButtonActive]}
                                onPress={changedTheme}
                            >
                                <TextComp text="LIGHT" style={[
                                    styles.optionText,
                                    theme === 'light' && styles.optionTextActive
                                ]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.optionButton, theme === 'dark' && styles.optionButtonActive]}
                                onPress={changedTheme}
                            >
                                <TextComp text="DARK" style={[
                                    styles.optionText,
                                    theme === 'dark' && styles.optionTextActive
                                ]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {isFirstTime ? <ButtonComp title="LOGOUT" onPress={onLogout} /> : null}

                </View>
            </ModalComp>
        </View>
    );
};


const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];
    return StyleSheet.create({
        container: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: moderateScale(16),
        },

        titleText: {
            fontSize: moderateScale(18),
            fontFamily: fontFamily.medium,
        },

        modalContainer: {
            backgroundColor: colors.background,
            minHeight: moderateScale(100),
        },

        modalTitle: {
            fontSize: moderateScale(24),
            fontFamily: fontFamily.bold,
            marginBottom: moderateScale(24),
            textAlign: 'center',
        },

        section: {
            marginBottom: moderateScale(24),
        },

        sectionTitle: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            marginBottom: moderateScale(12),
            opacity: 0.8,
        },

        optionRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: moderateScale(12),
        },

        optionButton: {
            flex: 1,
            padding: moderateScale(12),
            borderRadius: moderateScale(12),
            backgroundColor: colors.surface,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.inputBorder,
        },

        optionButtonActive: {
            backgroundColor: colors.text,
            borderColor: colors.text,
        },

        optionText: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            color: colors.text,
        },

        optionTextActive: {
            color: colors.background,
        },

        logoutText: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            color: colors.text,
        },
    });
};

export default HeaderComp;
