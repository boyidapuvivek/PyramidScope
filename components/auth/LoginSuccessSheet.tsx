import React, { useMemo, forwardRef, useImperativeHandle, useRef } from 'react';
import { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import {
    Text,
    YStack,
    Image,
    Button,
} from 'tamagui';
import { View } from 'react-native';
import { useRouter } from 'expo-router';

interface LoginSuccessSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const LoginSuccessSheet = forwardRef<BottomSheet, LoginSuccessSheetProps>(
    ({ open, onOpenChange }, ref) => {
        const router = useRouter();
        const bottomSheetRef = useRef<BottomSheet>(null);
        const snapPoints = useMemo(() => ['65%'], []);

        // Expose all required methods to parent component
        useImperativeHandle(ref, () => ({
            snapToIndex: (index: number) => bottomSheetRef.current?.snapToIndex(index),
            snapToPosition: (position: string | number, animationConfigs?: any) =>
                bottomSheetRef.current?.snapToPosition(position, animationConfigs),
            expand: () => bottomSheetRef.current?.expand(),
            collapse: () => bottomSheetRef.current?.collapse(),
            close: () => bottomSheetRef.current?.close(),
            forceClose: () => bottomSheetRef.current?.forceClose()
        }));

        const handleRegister = () => {
            // Close the sheet
            bottomSheetRef.current?.close();

            // Update parent state
            setTimeout(() => {
                onOpenChange(false);
            }, 200);

            // Navigate to the home screen or registration flow
            setTimeout(() => {
                router.replace('/HomeScreen');
            }, 500);
        };

        const handleSheetChanges = (index: number) => {
            if (index === -1) {
                setTimeout(() => {
                    onOpenChange(false);
                }, 200);
            }
        };

        return (
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                index={open ? 0 : -1}
                enablePanDownToClose
                backdropComponent={(props) => (
                    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
                )}
                handleIndicatorStyle={{ backgroundColor: '#DEDEDE', width: 40, height: 5 }}
            >
                <BottomSheetView style={{ flex: 1 }}>
                    <YStack px="$5" gap="$4" alignItems="center" justifyContent='space-between'>

                        <YStack>
                            <YStack alignItems="center" marginBottom="$6">
                                <Image
                                    source={require('../../assets/images/successlogin.png')}
                                    width={274}
                                    height={274}
                                />
                            </YStack>

                            <Text
                                fontSize={28}
                                lineHeight={38}
                                fontFamily={'$Bold'}
                                textAlign="center"
                                color={'#0D120E'}
                            >
                                Yey! Login Successful!
                            </Text>

                            <Text
                                fontSize={16}
                                lineHeight={28}
                                fontFamily={'$Regular'}
                                color="#7F909F"
                                textAlign="center"
                                marginTop="$2"
                            >
                                You will be moved to home screen right now.
                                Enjoy the features!
                            </Text>
                        </YStack>

                        <Button
                            width="100%"
                            height="$6"
                            marginTop="$6"
                            backgroundColor="#2563EB"
                            color="white"
                            fontSize={16}
                            fontWeight="600"
                            borderRadius={14}
                            onPress={handleRegister}
                        >
                            Register
                        </Button>
                    </YStack>
                </BottomSheetView>
            </BottomSheet>
        );
    }
);

export default LoginSuccessSheet;