import React from 'react';
import { router } from 'expo-router';
import { Text, View, YStack, XStack } from 'tamagui';
import Warning from '~/assets/images/icons/recentviolation.svg'
import Ping from '~/assets/images/icons/ping.svg'
import Next from '~/assets/images/icons/nextarrow.svg'

type ReportViolationCardProps = {
    title: string;
    location: string;
    time: string;
    priority: string;
};

const ReportViolationCard: React.FC<ReportViolationCardProps> = ({
    title,
    location,
    time,
    priority,
}) => {
    const handleRouting = () => {
        // router.push('/comingsoon');
        console.log('ok');

    };

    return (
        <XStack
            bg="#fff"
            borderWidth={1}
            borderColor="#E5E7EB"
            br="$3"
            p="$3"
            mb="$3"
            gap={10}
            onPress={handleRouting}
            pressStyle={{ opacity: 0.9 }}
        >
            <Warning height={40} width={40} />

            <YStack flex={1} gap="$2.5">
                <Text fontSize={16} fontFamily='$Regular' color="#42526E">
                    {title}
                </Text>

                <XStack ai="center" gap="$2">
                    <Ping height={16} width={16} />
                    <Text fontSize={14} color="#6B7280" fontFamily='$Regular'>
                        {location}
                    </Text>
                </XStack>

                <Text fontSize={14} color="#6B7280" fontFamily='$Regular'>
                    {time}
                </Text>
            </YStack>

            <YStack ai="flex-end" justifyContent='space-between'>
                <Next height={20} width={20} />
                <Text fontSize={14} color="#EF4444" fontFamily='$Regular' pr={5}>
                    {priority}
                </Text>
            </YStack>
        </XStack>
    );
};

export default ReportViolationCard;
