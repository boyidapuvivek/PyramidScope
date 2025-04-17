import React from 'react'
import { homeScreen } from '~/constants/homescreen'
import { router } from 'expo-router'
import { XStack, YStack, Text, ScrollView, Image, styled } from 'tamagui'
import { TouchableOpacity } from 'react-native'
import Clock from '~/assets/images/icons/clock.svg'

const RecentReports = () => {
    const reports = homeScreen.recentReportsData
    const handleRouting = () => {
        // router.push('/comingsoon')
        console.log('comming soon');

    }

    return (
        <YStack my={16} px={22}>
            <XStack h={36} ai="center" jc="space-between" my={20}>
                <XStack h={36} ai="center" gap="$3">
                    <YStack width={4} height={24} bg="#CABDFF" borderRadius={2} />
                    <Text fontFamily='$SemiBold' fontSize={18} color="#172B4D">
                        Recent Reports
                    </Text>
                </XStack>

                <TouchableOpacity onPress={handleRouting}>
                    <YStack
                        h={36}
                        w={82}
                        ai="center"
                        jc="center"
                        borderWidth={1.5}
                        borderColor="#EFEFEF"
                        borderRadius={100}
                    >
                        <Text fontSize={12} fontFamily='$SemiBold' color="#6F767E">
                            See All {'>'}
                        </Text>
                    </YStack>
                </TouchableOpacity>
            </XStack>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {reports.map((report, index) => (
                    <TouchableOpacity key={index} onPress={handleRouting}>
                        <YStack
                            w={200}
                            mr={12}
                            p={12}
                            bg="#FFFFFF"
                            borderRadius={12}
                            borderWidth={1}
                            borderColor="#E5E7EB"
                        >
                            <XStack jc="space-between">
                                <report.Icon height={24} width={24} />
                                <XStack
                                    ai="center"
                                    px={8}
                                    py={2}
                                    borderRadius={20}
                                    bg={report.color}
                                >
                                    <Text
                                        fontSize={12}
                                        fontFamily='$Regular'
                                        lineHeight={16}
                                        color={report.textColor}
                                    >
                                        {report.status}
                                    </Text>
                                </XStack>
                            </XStack>

                            <Text
                                fontSize={16}
                                fontFamily='$Regular'
                                color="#111827"
                                mt={8}
                                mb={8}
                            >
                                {report.title}
                            </Text>

                            <XStack ai={'center'} gap="$1">
                                <Clock height={16} width={16} />
                                <Text fontSize={14} fontFamily='$Regular' color="#6B7280">
                                    {report.date}
                                </Text>
                            </XStack>
                        </YStack>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </YStack>
    )
}

export default RecentReports
