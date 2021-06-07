import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BackgroundControl = ({ children, color }) => {
    const [bgColor, setBgColor] = useState('red');

    const getRandomColor = () => {
        setBgColor('rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');
    };

    return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
            {children}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => color ? setBgColor(color) : getRandomColor()}
                style={s.buttonHolder}>
                <Image
                    resizeMode={'contain'}
                    style={{ width: 50, height: 50 }}
                    source={require('./src/assets/btn_icon.png')} />
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12, lineHeight: 14, marginTop: 4 }}>Change color</Text>
            </TouchableOpacity>
        </View>
    );
};

const s = StyleSheet.create({
    buttonHolder: {
        position: 'absolute',
        bottom: 63,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
});
export default BackgroundControl;
