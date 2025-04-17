import React from 'react'
import { XStack, YStack, Text, styled } from 'tamagui'
import { router } from 'expo-router'
import Inspection from '~/assets/images/icons/inspection.svg'
import Reports from '~/assets/images/icons/totalreports.svg'
import Violation from '~/assets/images/icons/violation.svg'
import Guideline from '~/assets/images/icons/guidelines.svg'

const cardBoxData = [
    {
        title: 'New Inspection',
        Icon: Inspection,
        bgColor: '#EFF6FF',
        color: '#2563EB',
        route: './reports',
    },
    {
        title: 'Reports',
        Icon: Reports,
        bgColor: '#FAF5FF',
        color: '#9333EA',
        route: '/comingsoon',
    },
    {
        title: 'Violation',
        Icon: Violation,
        bgColor: '#FCF4EA',
        color: '#EA580C',
        route: '/comingsoon',
    },
    {
        title: 'Guidelines',
        Icon: Guideline,
        bgColor: '#EFFCF3',
        color: '#16A34A',
        route: '/comingsoon',
    },
]

const Card = styled(YStack, {
    width: '45%',
    aspectRatio: 1.5,
    padding: 10,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 12,
})

const CardBox = () => {
    return (
        <XStack
            width="100%"
            flexWrap="wrap"
            justifyContent="center"
            paddingHorizontal={10}
        >
            {cardBoxData.map(({ title, Icon, bgColor, color, route }, index) => (
                <Card
                    key={index}
                    backgroundColor={bgColor}
                    onPress={() => /*router.push(route)*/ console.log('ok')}
                >
                    <Icon width={24} height={24} />
                    <Text fontFamily="$SemiBold" fontSize={14} color={color}>
                        {title}
                    </Text>
                </Card>
            ))}
        </XStack>
    )
}

export default CardBox
