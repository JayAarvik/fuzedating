import { View, Text } from 'react-native';
import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function CircularProgressScreen() {
    return (
        <AnimatedCircularProgress
        size={20}
        width={4}
        fill={40}
        tintColor="#000"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#999" />
    )
}