import React from 'react'
import {
    YStack,
    XStack,
    Text,
    Input,
    Image,
    Button,
    styled,
} from 'tamagui'
import { useWindowDimensions } from 'react-native'
import Star from './Star'
import { Ionicons } from '@expo/vector-icons'

const NotificationIcon = styled(YStack, {
    position: 'relative',
    padding: 8,
    backgroundColor: '#EAEAFF',
    opacity: 0.54,
    borderRadius: 100,
    height: 45,
    width: 45,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
})

const Dot = styled(YStack, {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    backgroundColor: '#ED544E',
    borderRadius: 999,
    zIndex: 3,
})

const TopHeader = () => {
    const { width } = useWindowDimensions()

    return (
        <YStack height={270} bg="$white" borderBottomLeftRadius={52} borderBottomRightRadius={52}>
            <YStack
                pt={80}
                h={210}
                w={width}
                bg="#2563EB"
                borderBottomLeftRadius={52}
                borderBottomRightRadius={52}
                ai="center"
                position="relative"
            >
                <YStack position="absolute" w="100%" h="100%" zIndex={0}>
                    <Star size={50} style={{ position: 'absolute', top: '120%', left: '1%' }} />
                    <Star size={30} style={{ position: 'absolute', top: '92%', right: '2%' }} />
                    <Star size={25} style={{ position: 'absolute', top: '20%', left: '25%' }} />
                </YStack>

                <XStack
                    w={width * 0.9}
                    ai="center"
                    gap="$2"
                    h={50}
                    zIndex={2}
                >
                    <Image
                        source={require('../../assets/images/profile.png')}
                        width={45}
                        height={45}
                        borderRadius={100}
                    />
                    <YStack f={1}>
                        <Text fontSize={20} fontFamily={'$SemiBold'} color="#fff">
                            Welcome Back
                        </Text>
                        <Text fontSize={12} fontFamily={'$Regular'} color="#d0d8ff" mt={2}>
                            INSPECTOR JOHN DOE
                        </Text>
                    </YStack>
                    <NotificationIcon>
                        <Ionicons name="notifications-outline" size={28} color="#FFFFFF" />
                        <Dot />
                    </NotificationIcon>
                </XStack>

                <XStack
                    mt={50}
                    w={width * 0.9}
                    minHeight={57}
                    bg="#FBFBFB"
                    borderRadius={12}
                    borderColor="#EAEAFF"
                    borderWidth={1.5}
                    ai="center"
                    px={12}
                >
                    <Input
                        placeholder="Search by Address or Permit No."
                        placeholderTextColor="#999"
                        flex={1}
                        size="$4"
                        color="#333"
                    />
                    <YStack bg="#6759FF" p={10} borderRadius={10} ml={8}>
                        <Ionicons name="search" size={20} color="#FFFFFF" />
                    </YStack>
                </XStack>
            </YStack>
        </YStack>
    )
}

export default TopHeader
