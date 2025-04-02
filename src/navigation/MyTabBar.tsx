//import liraries
import ModalComp from '@/components/ModalComp';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { Colors, commonColors, ThemeType } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


// create a component
const MyTabBar = ({ state, descriptors, navigation }) => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const styles = useRTLStyles(isRTL, theme);
    const colors = Colors[theme];
    return (
        <View style={styles.container}>
            {state?.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({ type: 'tabLongPress', target: route.key });
                };

                const icon = options.tabBarIcon
                    ? options.tabBarIcon({
                        focused: isFocused,
                    })
                    : null;
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.subContainer}
                    >
                        {icon}
                        <TextComp
                            text={route.name}
                            style={{
                                color: isFocused ? commonColors.primary : colors.inputPlaceholder,
                                marginTop: moderateScale(8)
                            }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// define your styles

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];
    return useMemo(() => StyleSheet.create({
        container: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.background,
            paddingHorizontal: moderateScale(30),
            minHeight: moderateScale(72),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
        },
        subContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    }), [isRTL, theme]);
};

//make this component available to the app
export default React.memo(MyTabBar);
