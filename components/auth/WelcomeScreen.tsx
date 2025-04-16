import React from 'react';
import PagerView from 'react-native-pager-view';
import { YStack, Image, Text } from 'tamagui';

type Props = {
    pagerRef: React.RefObject<PagerView>;
    setCurrentPage: (page: number) => void;
};

const pages = [
    {
        key: '1',
        image: require('../../assets/images/onboard1.png'),
        title: 'Welcome to Pyramidscope',
        subtitle: 'Streamline your inspection process with ease.',
    },
    {
        key: '2',
        image: require('../../assets/images/onboard2.png'),
        title: 'Track Your Inspections',
        subtitle: 'View schedules, reports, and compliance status in one place.',
    },
    {
        key: '3',
        image: require('../../assets/images/onboard3.png'),
        title: 'Smart Reporting',
        subtitle: 'Generate, manage, and submit reports effortlessly.',
    },
];

const WelcomeScreen: React.FC<Props> = ({ pagerRef, setCurrentPage }) => {
    return (
        <PagerView
            ref={pagerRef}
            style={{ flex: 1 }}
            initialPage={0}
            onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
        >
            {pages.map(({ key, image, title, subtitle }) => (
                <YStack key={key} flex={1} ai="center" pt={'40%'} jc={'space-around'}>
                    <Image source={image} height={'58%'} width={'100%'} />
                    <YStack ai={'center'} gap={'$4'}>
                        <Text color="#0D0C22" fos={25} fontFamily="$Regular" pt={80}>
                            {title}
                        </Text>
                        <Text
                            color="#6E6D7A"
                            fos={18}
                            lh={28}
                            ta="center"
                            px={'$3'}
                            fontFamily="$Regular"
                        >
                            {subtitle}
                        </Text>
                    </YStack>
                </YStack>
            ))}
        </PagerView>
    );
};

export default WelcomeScreen;
