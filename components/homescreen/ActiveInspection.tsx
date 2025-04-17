import React from 'react'
import { XStack, YStack, Text, styled, Button, ScrollView } from 'tamagui'
import { router } from 'expo-router'
import InspectionCard from './InspectionCard'
import { homeScreen } from '~/constants/homescreen'

const Bar = styled(YStack, {
    width: 4,
    height: 24,
    backgroundColor: '#CABDFF',
    borderRadius: 2,
})

const ActiveInspection = () => {
    const handleRouting = () => {
        // router.push('/comingsoon')
        console.log('ok');

    }

    return (
        <YStack bg="#FFF" width="100%" px={22} pt={10}>
            <XStack jc="space-between" ai="center" mb={10}>
                <XStack ai="center" space="$3">
                    <Bar />
                    <Text fontFamily='$SemiBold' fontSize={18} color="#172B4D">
                        Active Inspection
                    </Text>
                </XStack>

                <Button
                    size="$3"
                    borderRadius={100}
                    borderWidth={1.5}
                    borderColor="#EFEFEF"
                    bg="transparent"

                    onPress={handleRouting}
                >
                    <Text fontFamily='$SemiBold' fontSize={12} color="#6F767E">
                        See All {'>'}
                    </Text>
                </Button>
            </XStack>

            <ScrollView showsVerticalScrollIndicator={false}>
                <YStack gap="$3">
                    {homeScreen.inspectionData.map((item, index) => (
                        <InspectionCard key={index} {...item} />
                    ))}
                </YStack>
            </ScrollView>
        </YStack>
    )
}

export default ActiveInspection
