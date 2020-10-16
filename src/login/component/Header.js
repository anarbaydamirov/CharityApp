import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.loginText}>Daxil Ol</Text>
                </View>
                <View>
                    <Text style={styles.pleaseText}>İstifadə üçün login edin.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:18,
        marginTop:'3%',
        marginBottom:80
    },
    image: {
        margin: 8,
        color:'#A8ADB4'
    },
    loginText: {
        fontSize: 22,
        color: '#3e4a59',
        fontWeight: 'bold',
        margin: 8
    },
    pleaseText: {
        fontSize: 13,
        marginLeft: 8,
        color: '#8b959a'
    }
})