import React from "react";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabLayout = () => {
    return (

        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="HomeScreen" />
        </Tabs>
    )
}

export default TabLayout;