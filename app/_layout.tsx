import { View, Text} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => (
    <Stack>
        <Stack.Screen name='index' options={{title: 'Карта'}}/>
    </Stack>
)

export default Layout;