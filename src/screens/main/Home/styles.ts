import { Colors, commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet, Dimensions } from 'react-native';
import { useMemo } from 'react';

const { width } = Dimensions.get('window');
const CARD_MARGIN = moderateScale(4);
const CARD_WIDTH = (width - moderateScale(20) - CARD_MARGIN * 2) / 2;

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];

    return useMemo(() => StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
        },
        header: {
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(12),
            borderBottomWidth: 1,
            borderBottomColor: colors.inputBorder,
            backgroundColor: colors.surface,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
            zIndex: 1,
        },
        headerTitle: {
            fontSize: moderateScale(24),
            fontFamily: fontFamily.bold,
            color: colors.text,
            textAlign: isRTL ? 'right' : 'left',
        },
        listContainer: {
            gap: 10,
            paddingHorizontal: 10,

        },
        columnWrapper: {
            justifyContent: 'space-between',
        },
        footerLoader: {
            width: '100%',
            height: moderateScale(50),
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: moderateScale(20),
        },
        card: {
            width: CARD_WIDTH,
            backgroundColor: colors.surface,
            borderRadius: moderateScale(8),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
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
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: moderateScale(8),
        },
        characterName: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.bold,
            color: colors.text,
            flex: 1,
            textAlign: isRTL ? 'right' : 'left',
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
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            marginBottom: moderateScale(4),
        },
        label: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.medium,
            color: colors.textSecondary,
            marginEnd: moderateScale(4),
        },
        value: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.regular,
            color: colors.text,
            flex: 1,
            textAlign: isRTL ? 'right' : 'left',
        },
        statusBadge: {
            paddingHorizontal: moderateScale(8),
            paddingVertical: moderateScale(2),
            borderRadius: moderateScale(12),
            backgroundColor: colors.surface,
            position: 'absolute',
            top: moderateScale(8),
            right: moderateScale(8),
            flexDirection: isRTL ? 'row-reverse' : 'row',
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
            color: colors.text,
            marginStart: moderateScale(4),
        },
        listHeader:{
            height: moderateScale(10)
        }
    }), [isRTL, theme, colors]);
};

export default useRTLStyles;