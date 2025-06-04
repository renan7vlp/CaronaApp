import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome Home</Text>
                <Text style={styles.subtitle}>This is a beautifully styled centric screen</Text>
                <Text style={styles.description}>
                    Explore the app to discover more features and enjoy the modern and clean design.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6C63FF', // modern purple background
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#6C63FF',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4e4b66',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#7d7a99',
        textAlign: 'center',
        lineHeight: 22,
    }
})

export default Home

