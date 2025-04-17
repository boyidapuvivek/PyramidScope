import React from 'react';
import { FlatList } from 'react-native';
import { homeScreen } from '~/constants/homescreen';
import { router } from 'expo-router';
import { Button, Text, View, YStack, XStack } from 'tamagui';
import ReportViolationCard from './RecentViolationCard';

const RecentViolation = () => {
    const data = homeScreen.notifications;

    const handleRouting = () => {
        // router.push('/comingsoon');
        console.log('ok');

    };

    return (
        <YStack py="$4" px="$5">
            <XStack jc="space-between" ai="center" mb="$4">
                <XStack ai="center" space="$3">
                    <View w={4} h={24} br="$2" bg="#CABDFF" />
                    <Text fontFamily="$heading" fontSize="$5" color="#172B4D">
                        Recent Violations
                    </Text>
                </XStack>
                <Button
                    size="$2"
                    chromeless
                    borderColor="#EFEFEF"
                    borderWidth={1.5}
                    br="$10"
                    onPress={handleRouting}
                >
                    <Text fontSize="$1" color="#6F767E">
                        See All {'>'}
                    </Text>
                </Button>
            </XStack>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ReportViolationCard
                        title={item.title}
                        location={item.location}
                        time={item.time}
                        priority={item.priority}
                    />
                )}
                scrollEnabled={false}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        </YStack>
    );
};

export default RecentViolation;
