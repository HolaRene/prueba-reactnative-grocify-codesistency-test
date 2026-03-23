import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const _layout = () => {
    return (
        <View>
            <Text>_layout</Text>
            <Link href={'/(auth)/sign-in'}>Inicia sesión</Link>
            <Link href={'/(auth)/sign-up'}>Regístrate</Link>
        </View>
    )
}

export default _layout