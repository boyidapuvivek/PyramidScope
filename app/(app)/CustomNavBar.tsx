import React, { FC } from 'react'
import { ParamListBase, TabNavigationState } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import { View, YStack, Text, Theme, styled } from 'tamagui'
import { TouchableOpacity } from 'react-native'

type Props = {
    state: TabNavigationState<ParamListBase>
    descriptors: any
    bottom: number
}

const StyledTabBar = styled(View, {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
})

const CustomNavBar: FC<Props> = ({ state, descriptors, bottom }) => {
    const router = useRouter()

    return (
        <Theme name="light">
            <StyledTabBar bg={'#FFFFFF'}>
                {state.routes.map((route, index) => {
                    const { tabBarIcon, title } = descriptors[route.key].options
                    const isFocused = state.index === index

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => router.navigate(route.name as any)}
                            style={{
                                borderColor: isFocused ? '#2563EB' : 'transparent',
                                alignItems: 'center',
                                width: '20%'
                            }}
                        >
                            <YStack alignItems="center" h={75}>
                                {isFocused && <View width={48} height={2} bg={'#2563EB'} />}
                                <YStack alignItems='center' gap='$2' justifyContent='center' flex={1}>
                                    {tabBarIcon({ focused: isFocused })}
                                    <Text
                                        fontSize={11}
                                        lh={14}
                                        color={isFocused ? '#2563EB' : '#B8B8D2'}
                                        fontFamily='$PoppinsMedium'
                                    >
                                        {title ?? route.name}
                                    </Text>
                                </YStack>
                            </YStack>
                        </TouchableOpacity>
                    )
                })}
            </StyledTabBar>
        </Theme>
    )
}

export default CustomNavBar
