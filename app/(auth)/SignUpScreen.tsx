import React, { useState, useRef } from 'react';
import {
    Button,
    Input,
    Text,
    XStack,
    YStack,
    Image,
} from 'tamagui';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    signUpSchema,
    SignUpSchema,
} from '~/lib/validationSchema';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Sms from '../../assets/images/icons/sms.svg';
import Lock from '../../assets/images/icons/lock.svg';
import EmailVerificationSheet from '~/components/auth/EmailVerificationSheet';
import BottomSheet from '@gorhom/bottom-sheet';

const SignUpScreen = () => {
    const router = useRouter();
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [showSheet, setShowSheet] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const bottomSheetRef = useRef<BottomSheet>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = (data: SignUpSchema) => {
        console.log('Form Data:', data);
        setUserEmail(data.email);
        // Open the bottom sheet
        setShowSheet(true);
    };

    const handleOtpVerify = (otp: string) => {
        console.log('Verified OTP:', otp);
        // The verification sheet will handle showing the success sheet
        // No need to close it here as it's handled inside the EmailVerificationSheet
    };

    const handleResend = () => {
        console.log('Resending OTP to:', userEmail);
        // Implement your resend logic here
    };



    return (
        <>
            <YStack flex={1} bg='#FFFFFF' jc={'space-between'}>
                <YStack ai='center' px={'$4'} py={'$10'}>
                    <Image
                        source={require('~/assets/images/logo.png')}
                        w={70}
                        h={70}
                        mb={20}
                    />
                    <Text fontSize={25} fontFamily={'$Bold'} color='#0D0C22' mb={25}>
                        Welcome to PyramidScope
                    </Text>
                    <Text fontSize={18} color='#8A8995' mb={64} ff={'$Regular'}>
                        Please sign in to continue
                    </Text>

                    {/* Email Field */}
                    <YStack width='100%' gap={8} bg={'#FFFFFF'}>
                        <Text fontSize={18} fontWeight={600} fontFamily={'$NunitoSan'} color={'#0D120E'}>
                            Inspector ID
                        </Text>
                        <XStack borderRadius={12} px={16} py={14} ai='center'>
                            <Sms height={23} width={23} />
                            <Controller
                                control={control}
                                name='email'
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder='Enter your email'
                                        borderWidth={0}
                                        flex={1}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        bg={'#FFFFFF'}
                                        fontFamily={'$Regular'}
                                        fontSize={16}
                                        lineHeight={28}
                                    />
                                )}
                            />
                        </XStack>
                        {errors.email && (
                            <Text color='red'>{errors.email.message}</Text>
                        )}
                    </YStack>

                    {/* Password Field */}
                    <YStack width='100%' gap={8} mt={24}>
                        <Text fontSize={18} fontWeight={600} fontFamily={'$NunitoSan'} color={'#0D120E'}>
                            Password
                        </Text>
                        <XStack bg='#FFFFFF' borderRadius={12} px={16} py={14} ai='center' jc='space-between'>
                            <XStack ai='center' gap={8} flex={1}>
                                <Lock height={23} width={23} />
                                <Controller
                                    control={control}
                                    name='password'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Input
                                            placeholder='Enter your password'
                                            secureTextEntry={!isPasswordVisible}
                                            borderWidth={0}
                                            flex={1}
                                            bg='#FFFFFF'
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            fontFamily={'$Regular'}
                                            fontSize={16}
                                            lineHeight={28}
                                        />
                                    )}
                                />
                            </XStack>
                            <Feather
                                name={isPasswordVisible ? 'eye' : 'eye-off'}
                                size={22}
                                color='#9CA3AF'
                                onPress={() => setPasswordVisible(prev => !prev)}
                            />
                        </XStack>

                        {errors.password && (
                            <Text color='red'>{errors.password.message}</Text>
                        )}

                        <Text
                            onPress={() => console.log('ok')}
                            color='#2563EB'
                            fontSize={14}
                            mt={8}
                            textAlign='right'
                            width='100%'
                        >
                            Forgot Password?
                        </Text>
                    </YStack>
                </YStack>

                {/* Register Button */}
                <XStack ai={'center'} jc={'center'} pb={36}>
                    <Button
                        width='90%'
                        height={'$6'}
                        mt={40}
                        bg='#2563EB'
                        color='white'
                        fontSize={16}
                        fontWeight='600'
                        borderRadius={14}
                        onPress={handleSubmit(onSubmit)}
                    >
                        Register
                    </Button>
                </XStack>
            </YStack>

            {/* Email Verification Sheet */}
            <EmailVerificationSheet
                ref={bottomSheetRef}
                open={showSheet}
                email={userEmail}
                onVerifyPress={handleOtpVerify}
                onResend={handleResend}
            />
        </>
    );
};

export default SignUpScreen;