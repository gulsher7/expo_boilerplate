import CharacterCard, { Character } from '@/components/CharacterCard';
import HeaderComp from '@/components/HeaderComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import actions from '@/redux/actions';
import { commonColors } from '@/styles/colors';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import { ApiResponse } from './home.types';
import useRTLStyles from './styles';

const Home = () => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const styles = useRTLStyles(isRTL, theme);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async (pageNumber: number) => {

        try {
            const response = (await actions.getHomeData(`?page=${pageNumber}`)) as unknown as ApiResponse;
            if (response?.results) {
                setCharacters(response.results);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData(1);
    };

    const onPressCard = () => {
        // Add card press animation or navigation here
    };

    const renderCharacterCard = useCallback(({ item, index }: { item: Character; index: number }) => {
        return <CharacterCard item={item} index={index} onPress={onPressCard} />;
    }, [onPressCard]);

    if (loading) {
        return (
            <WrapperContainer style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={commonColors.primary} />
            </WrapperContainer>
        );
    }

    return (
        <WrapperContainer style={styles.container} edges={['top']}>
            <HeaderComp showBack={false} title='CHARACTERS' />
            <FlatList
                data={characters}
                renderItem={renderCharacterCard}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={() => <View style={styles.listHeader} />}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[commonColors.primary]}
                        tintColor={commonColors.primary}
                    />
                }
                columnWrapperStyle={styles.columnWrapper}
            />
        </WrapperContainer>
    );
};

export default Home;
