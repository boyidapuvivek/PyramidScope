import React from 'react'
import { Text, XStack, YStack, View } from 'tamagui'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

type Props = {
    Icon: React.ComponentType<any>
    title: string
    subTitle: string
    status: string
    progress: number
}

const getStatusStyle = (status: Props['status']) => {
    switch (status) {
        case 'Pending':
            return { bgColor: '#EF4444', textColor: '#FFFFFF' }
        case 'In Progress':
            return { bgColor: '#FACC15', textColor: '#FFFFFF' }
        case 'Completed':
            return { bgColor: '#4CAF50', textColor: '#FFFFFF' }
        default:
            return { bgColor: '#E5E7EB', textColor: '#FFFFFF' }
    }
}

const ProgressBar = ({ progress }: { progress: number }) => (
    <YStack
        height={8}
        bg="#E5E7EB"
        borderRadius={8}
        overflow="hidden"
        width="100%"
    >
        <YStack
            height="100%"
            bg="#4CAF50"
            borderRadius={8}
            width={`${progress * 100}%`}
        />
    </YStack>
)

const InspectionCard = ({ Icon, title, subTitle, status, progress }: Props) => {
    const { bgColor, textColor } = getStatusStyle(status)

    return (

        <TouchableOpacity onPress={() => /*router.push('/comingsoon')*/ console.log('comming soon')}>
            <XStack
                width="100%"
                bg="#FFF"
                borderRadius={16}
                borderColor="#E5E7EB"
                borderWidth={1}
                gap={'$3'}
                px={16}
                py={16}
            >
                <YStack
                    width={40}
                    height={40}
                    bg="#E0EDFF"
                    borderRadius={20}
                    ai="center"
                    jc="center"
                >
                    <Icon />
                </YStack>
                <YStack ai="flex-start" mb={14} flex={1} gap={'$4'}>
                    <XStack ai="flex-start" gap="$3" flex={1}>
                        <YStack flex={1}>
                            <Text fontFamily='$SemiBold' fontSize={16} color="#111827">
                                {title}
                            </Text>
                            <Text
                                mt={2}
                                fontFamily='$Regular'
                                fontSize={14}
                                color="#6B7280"
                            >
                                {subTitle}
                            </Text>
                        </YStack>
                        <YStack
                            bg={bgColor}
                            px="$2.5"
                            py="$1.5"
                            borderRadius={50}
                            jc="center"
                            ai="center"
                        >
                            <Text fontSize={10} color={textColor} fontFamily='$Regular'>
                                {status}
                            </Text>
                        </YStack>
                    </XStack>


                    <YStack gap="$2" width={'100%'}>
                        <View>
                            <ProgressBar progress={progress} />
                        </View>
                        <XStack jc="space-between" mt={8}>
                            <Text fontSize={12} color="#4B5563" fontFamily='$Regular'>
                                {Math.round(progress * 100)}% Complete
                            </Text>
                            <Text fontSize={12} color="#FF6E40" fontFamily='$Regular'>
                                Due in 2 days
                            </Text>
                        </XStack>
                    </YStack>


                </YStack>
            </XStack >
        </TouchableOpacity >


    )
}

export default InspectionCard
