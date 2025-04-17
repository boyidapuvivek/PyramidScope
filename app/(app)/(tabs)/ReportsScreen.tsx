import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🚧 Coming Soon 🚧</Text>
            <Text style={styles.subtitle}>This feature is under development.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
    },
});

export default ReportsScreen;
