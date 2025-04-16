import React, { useState, useEffect, useRef, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { YStack, Text, Button, Image, XStack } from 'tamagui';
import { TextInput, Platform, TouchableOpacity } from 'react-native';
import SmsEdit from '~/assets/images/icons/sms.svg';
import LoginSuccessSheet from './LoginSuccessSheet';

interface EmailVerificationSheetProps {
    email: string;
    onVerifyPress: (otp: string) => void;
    onResend: () => void;
    open: boolean;
}

const EmailVerificationSheet = forwardRef<BottomSheet, EmailVerificationSheetProps>(
    ({ email, onVerifyPress, onResend, open }, ref) => {
        const snapPoints = useMemo(() => ['80%'], []);
        const bottomSheetRef = useRef<BottomSheet>(null);
        const successSheetRef = useRef<BottomSheet>(null);
        const inputRef = useRef<TextInput>(null);
        const [otpValue, setOtpValue] = useState('');
        const [timeLeft, setTimeLeft] = useState(10);
        const [isTimerActive, setIsTimerActive] = useState(false);
        const [showSuccessSheet, setShowSuccessSheet] = useState(false);

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
        // Handle bottom sheet index change
        const handleSheetChanges = useCallback((index: number) => {
            console.log('Sheet index changed:', index);
        }, []);

        // Initialize sheet when opened
        useEffect(() => {
            if (open) {
                setOtpValue('');
                setTimeLeft(10);
                setIsTimerActive(true);

                const timer = setTimeout(() => {
                    inputRef.current?.focus();
                }, 300);

                return () => clearTimeout(timer);
            }
        }, [open]);

        // Handle timer countdown
        useEffect(() => {
            if (!isTimerActive) return;

            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setIsTimerActive(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }, [isTimerActive]);

        // Format time for display
        const formatTime = (seconds: number): string => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        };

        // Handle resend button press
        const handleResend = () => {
            setTimeLeft(10);
            setIsTimerActive(true);
            setOtpValue('');
            onResend();

            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        };

        // Handle verify button press
        const handleVerify = () => {
            if (otpValue.length === 5) {
                // Call parent callback with OTP
                onVerifyPress(otpValue);

                // Close the verification sheet
                bottomSheetRef.current?.close();

                // Show success sheet after a short delay
                setTimeout(() => {
                    setShowSuccessSheet(true);
                }, 300);
            }
        };

        // Handle success sheet close
        const handleSuccessSheetOpenChange = () => {
            setShowSuccessSheet(false);
        };

        return (
            <>
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    index={open ? 0 : -1}
                    enablePanDownToClose
                    backdropComponent={(props) => (
                        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
                    )}
                >
                    <BottomSheetView style={{ flex: 1 }}>
                        <YStack gap={'$4'} alignItems="center" width="100%">
                            <Image
                                source={require('../../assets/images/inbox.png')}
                                width={274}
                                height={274}
                            />

                            <Text fontSize={27} lineHeight={38} fontFamily="$Bold" textAlign="center" marginTop="$4">
                                Confirm Your Email
                            </Text>

                            <Text fontSize={16} fontFamily="$Regular" color="#7F909F" textAlign="center">
                                We've sent 5 digits verification code to <Text color="#2563EB">{email || 'your email'}</Text>
                            </Text>

                            <YStack width="100%" marginTop="$4" alignItems="center">
                                <Text
                                    fontSize={18}
                                    fontFamily="$SemiBold"
                                    color="#0D120E"
                                    marginBottom="$2"
                                    alignSelf="flex-start"
                                    paddingLeft="10%"
                                >
                                    Email
                                </Text>

                                <XStack
                                    borderWidth={1}
                                    borderColor="#2563EB"
                                    borderRadius={18}
                                    paddingHorizontal={16}
                                    alignItems="center"
                                    width="85%"
                                    maxWidth={380}
                                    height="$6"
                                >
                                    <SmsEdit height={22} width={22} />

                                    <TextInput
                                        ref={inputRef}
                                        value={otpValue}
                                        onChangeText={(text) => {
                                            const numericValue = text.replace(/[^0-9]/g, '');
                                            setOtpValue(numericValue);
                                        }}
                                        placeholder="Enter code"
                                        keyboardType="number-pad"
                                        maxLength={5}
                                        style={{
                                            flex: 1,
                                            fontSize: 16,
                                            fontFamily: Platform.OS === 'ios' ? 'System' : 'normal',
                                            height: '100%',
                                            paddingVertical: 14,
                                            paddingHorizontal: 10,
                                            backgroundColor: 'transparent',
                                        }}
                                        autoFocus={open}
                                        showSoftInputOnFocus
                                        cursorColor="#2563EB"
                                    />

                                    {isTimerActive ? (
                                        <Text color="#7F909F" fontFamily="$Regular" fontSize={16} lineHeight={27}>
                                            Resend in {formatTime(timeLeft)}
                                        </Text>
                                    ) : (
                                        <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
                                            <Text color="#2563EB" fontFamily="$Regular" fontSize={16} lineHeight={27}>
                                                Resend
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                </XStack>
                            </YStack>

                            <Button
                                width="85%"
                                maxWidth={380}
                                height="$6"
                                marginTop="$6"
                                backgroundColor="#2563EB"
                                color="white"
                                fontSize={16}
                                fontWeight="600"
                                borderRadius={14}
                                onPress={handleVerify}
                                disabled={otpValue.length !== 5}
                                opacity={otpValue.length === 5 ? 1 : 0.7}
                            >
                                Verify
                            </Button>
                        </YStack>
                    </BottomSheetView>
                </BottomSheet>

                {/* Success Sheet */}
                <LoginSuccessSheet
                    ref={successSheetRef}
                    open={showSuccessSheet}
                    onOpenChange={handleSuccessSheetOpenChange}
                />
            </>
        );
    }
);

export default EmailVerificationSheet;