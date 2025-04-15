import React, { useRef, useState } from 'react';
import { Button, XStack, YStack, View } from 'tamagui';
import PagerView from 'react-native-pager-view';
import WelcomeScreen from '~/components/WelcomeScreen';
import { useRouter } from 'expo-router';

const MyPagerWithControls = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);
  const router = useRouter();

  return (
    <YStack flex={1} bg={'#FFFFFF'}>
      <WelcomeScreen
        pagerRef={pagerRef}
        setCurrentPage={setCurrentPage}
      />
      <XStack
        jc="center"
        ai="center"
        gap={20}
        py="$3"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <View
            key={index}
            bg={currentPage === index ? '#2563EB' : '#CACACA'}
            width={currentPage === index ? 32 : 10}
            height={10}
            br={100}
            marginVertical={30}
            transition="all 300ms"
            animateOnly={['width', 'backgroundColor']}
            animationDelay='100ms'
          />
        ))}
      </XStack>
      <XStack
        jc="space-around"
        ai="center"
        bg="$background"
        paddingBottom={36}
      >
        <Button
          height={'$6'}
          width="90%"
          maxWidth={380}
          minWidth={320}
          color={'#FFFFFF'}
          fontFamily={'$Bold'}
          fontSize={16}
          bg={'#2563EB'}
          br={14}
          onPress={() => {
            if (currentPage !== 2) {
              pagerRef.current?.setPage(currentPage + 1);
            } else {
              router.push('/SignUpScreen');
            }
          }}

        >
          {currentPage !== 2 ? 'Next' : "Let's Go"}
        </Button>

      </XStack>
    </YStack >
  );
};

export default MyPagerWithControls;
