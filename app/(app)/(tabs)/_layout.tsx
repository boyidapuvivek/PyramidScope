import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomTabBar from '../CustomNavBar';

import Home from '~/assets/images/icons/home.svg';
import HomeActive from '~/assets/images/icons/home-active.svg';
import Schedule from '~/assets/images/icons/schedule.svg';
import ScheduleActive from '~/assets/images/icons/schedule-active.svg';
import Reports from '~/assets/images/icons/reports.svg';
import ReportsActive from '~/assets/images/icons/reports-active.svg';
import Messages from '~/assets/images/icons/messages.svg';
import MessagesActive from '~/assets/images/icons/messages-active.svg';
import Profile from '~/assets/images/icons/profile.svg';
import ProfileActive from '~/assets/images/icons/profile-active.svg';

export default function TabLayout() {
    const { bottom } = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
            tabBar={(props) => <CustomTabBar {...props} bottom={bottom} />}
        >
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (focused ? <HomeActive width={28} height={28} /> : <Home width={28} height={28} />),
                }}
            />
            <Tabs.Screen
                name="ScheduleScreen"
                options={{
                    title: 'Schedule',
                    tabBarIcon: ({ focused }) => (focused ? <ScheduleActive width={28} height={28} /> : <Schedule width={28} height={28} />),
                }}
            />
            <Tabs.Screen
                name="ReportsScreen"
                options={{
                    title: 'Reports',
                    tabBarIcon: ({ focused }) => (focused ? <ReportsActive width={28} height={28} /> : <Reports width={28} height={28} />),
                }}
            />
            <Tabs.Screen
                name="MessageScreen"
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ focused }) => (focused ? <MessagesActive width={28} height={28} /> : <Messages width={28} height={28} />),
                }}
            />
            <Tabs.Screen
                name="ProfileScreen"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (focused ? <ProfileActive width={28} height={28} /> : <Profile width={28} height={28} />),
                }}
            />
        </Tabs>
    );
}
