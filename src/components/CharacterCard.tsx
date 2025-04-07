import React, { useCallback, useMemo } from 'react';
import { Pressable, View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import TextComp from './TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { Colors, commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';

// Character interface
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
}

interface CharacterCardProps {
    item: Character;
    index: number;
    onPress?: () => void;
}

const { width } = Dimensions.get('window');
const CARD_MARGIN = moderateScale(4);
const CARD_WIDTH = (width - moderateScale(20) - CARD_MARGIN * 2) / 2;

const CharacterCard = ({ item, index, onPress }: CharacterCardProps) => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const colors = Colors[theme];
    const styles = useRTLStyles(isRTL, theme);

    const getStatusColor = useCallback((status: string) => {
        switch (status.toLowerCase()) {
            case 'alive':
                return commonColors.success;
            case 'dead':
                return commonColors.error;
            default:
                return commonColors.warning;
        }
    }, []);

    return (
        <Animated.View
            style={[styles.card, { backgroundColor: colors.surface }]}
            entering={FadeInDown.delay((index % 20) * 100).springify()}
            exiting={FadeOut}
        >
            <Pressable onPress={onPress} style={styles.cardPressable}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.characterImage}
                    contentFit="cover"
                    transition={200}
                />
                <View style={[styles.statusBadge, { backgroundColor: colors.surface }]}>
                    <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                    <TextComp isDynamic text={item.status} style={[styles.statusText, { color: colors.text }]} />
                </View>
                <View style={styles.cardContent}>
                    <View style={[styles.cardHeader, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.name} style={[styles.characterName, { 
                            color: colors.text,
                            textAlign: isRTL ? 'right' : 'left' 
                        }]} numberOfLines={1} />
                    </View>

                    <View style={[styles.infoRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.species} style={[styles.value, { 
                            color: colors.text,
                            textAlign: isRTL ? 'right' : 'left' 
                        }]} numberOfLines={1} />
                    </View>

                    <View style={[styles.infoRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.origin.name} style={[styles.value, { 
                            color: colors.text,
                            textAlign: isRTL ? 'right' : 'left' 
                        }]} numberOfLines={1} />
                    </View>

                    <View style={[styles.infoRow, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.location.name} style={[styles.value, { 
                            color: colors.text,
                            textAlign: isRTL ? 'right' : 'left' 
                        }]} numberOfLines={1} />
                    </View>
                </View>
            </Pressable>
        </Animated.View>
    );
};

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme ?? 'light'];

    return useMemo(() => StyleSheet.create({
        card: {
            width: CARD_WIDTH,
            backgroundColor: 'transparent', // Will be overridden in runtime
            borderRadius: moderateScale(8),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
            margin: CARD_MARGIN,
        },
        cardPressable: {
            flex: 1,
            width: '100%',
        },
        characterImage: {
            width: '100%',
            height: CARD_WIDTH * 1.2,
            resizeMode: 'cover',
            borderTopLeftRadius: moderateScale(8),
            borderTopRightRadius: moderateScale(8),
        },
        cardContent: {
            padding: moderateScale(12),
        },
        cardHeader: {
            flexDirection: 'row', // Will be handled by RTL at runtime
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: moderateScale(8),
        },
        characterName: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.bold,
            color: '#000', // Will be overridden at runtime
            flex: 1,
        },
        statusIndicator: {
            width: moderateScale(8),
            height: moderateScale(8),
            borderRadius: moderateScale(4),
            marginHorizontal: moderateScale(6),
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.3)',
        },
        infoRow: {
            flexDirection: isRTL ? 'row-reverse' : 'row', // Will be handled by RTL at runtime
            alignItems: 'center',
            marginBottom: moderateScale(4),
        },
        value: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.regular,
            color: '#000', // Will be overridden at runtime
            flex: 1,
        },
        statusBadge: {
            paddingHorizontal: moderateScale(8),
            paddingVertical: moderateScale(2),
            borderRadius: moderateScale(12),
            backgroundColor: 'transparent', // Will be overridden at runtime
            position: 'absolute',
            top: moderateScale(8),
            ...(isRTL ? { left: moderateScale(8) } : { right: moderateScale(8) }),
            flexDirection: isRTL ? 'row-reverse' : 'row', // Will be handled by RTL at runtime
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2,
            elevation: 3,
        },
        statusText: {
            fontSize: moderateScale(10),
            fontFamily: fontFamily.medium,
            color: '#000', // Will be overridden at runtime
            marginStart: moderateScale(4),
        },
    }), [isRTL, theme, colors]);
};

export default CharacterCard; 